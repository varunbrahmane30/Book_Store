import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/dataservice/data.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { FeedbackService } from 'src/app/service/Feedbackservice/feedback.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.scss'],
})
export class BookdetailsComponent implements OnInit {
  data: any;
  feedback: any;
  ordercount = 0;
  addtobaghide: boolean = true;
  counthide: boolean = false;
  currentRate = 0;
  feedbackform: any = FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private dataservice: DataService,
    private cartservice: CartService,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit() {
    this.dataservice.currentMessage.subscribe((data: any) => {
      this.data = data;
      console.log('data is : ', this.data);
    });
    this.getFeedback();

    this.feedbackform = this.formBuilder.group({
      rating: [''],
      comment: [''],
    });
  }

  onSubmit() {
    console.log(this.feedbackform.value);

    let reqPayload = {
      _id: this.data._id,
      rating: this.feedbackform.value.rating,
      comment: this.feedbackform.value.comment,
    };

    console.log(this.feedbackform.value);

    this.feedbackService.addFeedback(this.data._id, reqPayload).subscribe(
      (res) => {
        console.log(res);
        this.getFeedback();
        //   this.showSnackbar(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getFeedback() {
    this.feedbackService.getItems(this.data._id).subscribe(
      (res: any) => {
        this.feedback = res.result;
        console.log(this.feedback);
      },
      (err: any) => console.log(err)
    );
  }
  gotocart(data: any) {
    this.route.navigateByUrl('home/cart');
    this.dataservice.changeMessage(data);
  }

  gotowishlist(data: any) {
    this.route.navigateByUrl('home/wishlist');
    this.dataservice.changeMessage(data);
  }

  addtobagbuttonhide() {
    this.addtobaghide = false;
    this.counthide = true;
    this.cartservice.addcartitem(this.data._id).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  updateCount() {
    let payload = {
      quantityToBuy: this.ordercount,
    };
    this.cartservice.updateitemcount(this.data._id, payload).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
