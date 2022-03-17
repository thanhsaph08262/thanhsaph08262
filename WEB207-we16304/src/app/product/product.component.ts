import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  name: any = '';
  description: any = '';
  price: any = '';
  id: any = '';

  constructor() { }

  ngOnInit(): void {

    
  }
  
  product = [
    {
      id: 1,
      name: 'tuannda3',
      description: '0392871868',
      price: 10000
    },
    {
      id: 2,
      name: 'tuannda3',
      description: '0392871868',
      price: 20000
    },
    
  ];

  newProduct = {
    id: 0,
    name: '',
    description: '',
    price: 0,
  };
  onChange(event: any, key: string) {
    // this.newUser.id = this.users.length + 1; // de lai khi submit moi lam
    // js spread operator ...
    this.newProduct = {
      ...this.newProduct,
      [key]: event.target.value // gia tri cua key se phai trung voi thuoc tinh cua object
    };
    console.log(this.newProduct);
  }
  // Dinh nghia ham xoa khi click nut Delete
  remove(id: number) {
    this.product = this.product.filter(function (user) {
      return user.id !== id
    });
  }
  onSubmit(value: any) {
    // console.log(value);
    
    // 0. Validate
    if (!this.onValidate(this.newProduct)) {
      return;
    }

    if (this.isEdit) {
      for (let i = 0; i < this.product.length; i++) {
        if (this.product[i].id === this.id) {
          console.log(this.product[i]);
          this.product[i] = value
        }
      }
      this.isEdit = false;
    } else {
      value.id = this.product.length + 1;
      this.product.push(value);
    }

    this.newProduct = {
      id: 0,
      name: '',
      description: '',
      price: 0,
    };
  }

  isEdit = false;

  onEdit(obj :any) {
    this.newProduct = obj;
    this.id = obj.id;
    this.name = obj.name;
    this.description = obj.description;
    this.price = obj.price;
    this.isEdit = true;
  }
  onValidate(obj: any) {
    console.log(obj);
    
    // Check rỗng
    if (!this.name || !this.description || !this.price) {
      return false;
    }

    return true;
  }


}
