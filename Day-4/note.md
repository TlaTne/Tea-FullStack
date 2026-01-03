/* ~  > . # */
/* .todos input:checked ~ span {
    text-decoration: line-through;
} */
 /* p+h2+h2{
    color:red;
 } */
/* selector nằm sau liền kề: + */
 /* h2+h2{
    color:green;
 } */
  /* selector gộp :   ,     */
  /* nhiều selector sử dụng chung 1 block code */
  /* p + h2 , p + h2 + h2 {
    color:red;
  } */
   /* ul li a[target]{
    color:red;
   } */
/* ul li a[href="https://fullstack.edu.vn"]{
    color:red;
} */

/* tag[attribute="value"]:chọn thẻ tag có th ộc tính attribute=value   */
/* tag[attribute^="value"]:chọn thẻ tag có th ộc tính attribute=value   */
/* ul li a[href$=".vn"]{
    color:black;
} */
/* [class^="col-"]{
    color:red;
} */

/* h1::before{
    content: "a";
}
h1::after{
    content: "z";
}
.title::before{
    content: attr(data-index);
} */
/* 
p::first-line{
    color:red;
} */
/* p::selection{
    background: black;
    color:aqua
} */
 /* 1. hover , active , focus */
 .btn:hover {
    background: green;
 }
 .btn:active {
    background: blue;
 }
 .btn:focus{
    background:yellow;
 }