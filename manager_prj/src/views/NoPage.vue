<template>
  <div class="section-noPage">
    <div class="agileits-main pt-10">
      <router-link to="/" class="btn-back">Về Trang Chủ</router-link>
      <div class="agileinfo-row">
        <div class="w3layouts-errortext">
          <h2>O<span>O</span>PS</h2>

          <h1>
            Xin Lỗi! Trang này chúng tôi hiện đang cập nhật. Vui lòng quay lại sau
          </h1>
          <p class="w3lstext">
            Được thành lập từ năm 2021 cho đến nay công ty chúng tôi đã ngày càng
            được mở rộng, ngày càng được khách hàng ưa chuộng. Hiện tại, trong thời
            gian sắp tới công ty đang đề ra mục tiêu sẽ trở thành một trong số những
            công ty đi đầu về ngành dịch vụ truyền thông
          </p>
          <p class="w3lstext">
            Sự tin tưởng và ủng hộ của khách hàng trong suốt thời gian qua là nguồn
            động viên to lớn trên bước đường phát triển của công ty LH2D. Chúng tôi
            xin hứa sẽ không ngừng hoàn thiện, phục vụ khách hàng tốt nhất để luôn
            xứng đáng với niềm tin ấy."
          </p>
          <div class="agile-search">
            <form action="#" method="post">
              <input
                type="text"
                name="Search"
                placeholder="Tìm Kiếm..."
                id="search"
                required=""
              />
              <input type="submit" value="Search" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- //main -->
    <!-- copyright -->
    <div class="copyright w3-agile pt-10">
      <p>
        © Công Ty Cở Sở Vật Chất LH2D | Điều Hành bởi
        <a href="https://www.facebook.com/SyDung2222000/" target="_blank"
          >Nguyễn Sỹ Dũng</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoPage",
};
</script>
<style scoped>
a {
  text-decoration: none;
}
.txt-rt {
  text-align: right;
} /* text align right */
.txt-lt {
  text-align: left;
} /* text align left */
.txt-center {
  text-align: center;
} /* text align center */
.float-rt {
  float: right;
} /* float right */
.float-lt {
  float: left;
} /* float left */
.clear {
  clear: both;
} /* clear float */
.pos-relative {
  position: relative;
} /* Position Relative */
.pos-absolute {
  position: absolute;
} /* Position Absolute */
.vertical-base {
  vertical-align: baseline;
} /* vertical align baseline */
.vertical-top {
  vertical-align: top;
} /* vertical align top */
nav.vertical ul li {
  display: block;
} /* vertical menu */
nav.horizontal ul li {
  display: inline-block;
} /* horizontal menu */
img {
  max-width: 100%;
}
/*-- end reset --*/
.section-noPage {
  font-family: "Open Sans", sans-serif;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://wallpaperaccess.com/full/235166.jpg") no-repeat center 0px !important;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
}
/*-- main --*/
.agileinfo-row {
  width: 65%;
  margin: 0 auto;
}
/*-- top-nav --*/
.w3top-nav-right {
  margin-top: 4em;
}
.w3top-nav-left h1 {
  font-size: 3em;
  font-weight: 100;
  line-height: 0.9em;
}
.w3top-nav-left h1 a {
  color: #fff;
}
.w3top-nav-right ul li {
  display: inline-block;
  margin: 0 1.2em;
}
.w3top-nav-right ul li a {
  color: #fff;
  font-size: 1em;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
  transition: 0.5s all;
}
.w3top-nav-right ul li a:hover {
  color: #0214bd;
}
/*-- //top-nav --*/
/*-- //errortext --*/
.w3layouts-errortext {
  padding-top: 1em;
  text-align: center;
}
h1 {
  font-size: 1.5em;
  color: #fff;
  font-weight: 700;
  line-height: 1.8em;
}
p.w3lstext {
  font-size: 0.9em;
  color: #fff;
  line-height: 1.8em;
  font-weight: 400;
  width: 65%;
  text-transform: capitalize;
  margin: 1.5em auto 2.5em;
}
p.w3lstext a {
  color: #0214bd;
  padding-right: 10px;
}
p.w3lstext a:hover {
  color: #ffffff;
}
.agile-search input[type="text"] {
  width: 50%;
  padding: 0.8em 1.5em;
  font-size: 1em;
  color: #fff;
  outline: none;
  border: 1px solid #0214bd;
  background: none;
  border-radius: 50px;
  -webkit-appearance: none;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  transition: 0.5s all;
}
.agile-search input[type="submit"] {
  outline: none;
  box-shadow: none;
  background: #0214bd;
  border: 1px solid #0214bd;
  padding: 0.8em 3em;
  color: #fff;
  cursor: pointer;
  border-radius: 50px;
  font-size: 1em;
  margin-left: 0.5em;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  transition: 0.5s all;
}
.agile-search input[type="submit"]:hover {
  color: #fff;
  background: transparent;
}
::-webkit-input-placeholder {
  color: #fff !important;
}
:-moz-placeholder {
  /* Firefox 18- */
  color: #fff !important;
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: #fff !important;
}
:-ms-input-placeholder {
  color: #fff !important;
}
/*-- errortext --*/
/*-- copyright --*/
.copyright {
  margin: 3em 0 2em;
  text-align: center;
}
.copyright p {
  font-size: 1em;
  color: #fff;
  line-height: 1.8em;
}
.copyright p a {
  color: #fff;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
  transition: 0.5s all;
}
.copyright p a:hover {
  color: #0214bd;
}
/*-- //copyright --*/
/*-- //main --*/
.w3layouts-errortext h2 {
  font-size: 14em;
  letter-spacing: 20px;
  color: #fff;
}
span {
  color: #0214bd;
}
/*-- responsive-design --*/
@media (max-width: 1366px) {
  p.w3lstext {
    width: 75%;
  }
}
@media (max-width: 1080px) {
  .agileinfo-row {
    width: 75%;
  }
}
@media (max-width: 991px) {
  p.w3lstext {
    width: 85%;
  }
}
@media (max-width: 900px) {
  .agileinfo-row {
    width: 85%;
  }
  .w3top-nav {
    padding-top: 2em;
  }
  .w3layouts-errortext {
    padding-top: 5em;
    text-align: center;
  }
  .w3top-nav-right ul li {
    margin: 0 1em;
  }
  p.w3lstext {
    width: 95%;
  }
}
@media (max-width: 736px) {
  .w3layouts-errortext {
    padding-top: 3em;
  }
}
@media (max-width: 667px) {
  .w3top-nav-right ul li {
    margin: 0 0.5em;
  }
  h1 {
    font-size: 1em;
  }
  p.w3lstext {
    width: 100%;
    font-size: 0.85em;
    line-height: 2em;
  }
  .copyright {
    margin: 2em 0 2em;
  }
  .w3layouts-errortext {
    padding-top: 2em;
  }
}
@media (max-width: 480px) {
  .w3top-nav-left,
  .w3top-nav-right {
    float: none;
    text-align: center;
  }
  .w3top-nav-right {
    margin-top: 1.5em;
  }
  .w3top-nav-right ul li a {
    font-size: 0.9em;
  }
  .w3top-nav-right ul li {
    margin: 0 1em;
  }
  .w3layouts-errortext img {
    width: 52%;
  }
  h1 {
    font-size: 0.9em;
  }
  .agile-search input[type="text"],
  .agile-search input[type="submit"] {
    font-size: 0.9em;
  }
  .copyright p {
    font-size: 0.9em;
    padding: 0 1em;
  }
  .w3layouts-errortext {
    padding-top: 6em;
  }
}
@media (max-width: 414px) {
  .w3layouts-errortext h2 {
    font-size: 9em;
  }
  .w3layouts-errortext {
    padding-top: 2em;
  }
  .agile-search input[type="text"] {
    width: 80%;
    margin-bottom: 1em;
  }
}
@media (max-width: 384px) {
  .agile-search input[type="text"] {
    width: 85%;
  }
  .agile-search input[type="submit"] {
    margin: 0em 0 0 0;
    padding: 0.7em 2em;
  }
  .w3top-nav {
    padding-top: 1em;
  }
  p.w3lstext {
    font-size: 0.8em;
  }
  .agileinfo-row {
    width: 87%;
  }
  .w3layouts-errortext {
    padding-top: 1em;
  }
  .w3layouts-errortext h2 {
    letter-spacing: 10px;
  }
}
@media (max-width: 320px) {
  .w3top-nav-right ul li a {
    font-size: 0.85em;
  }
  .w3top-nav-right ul li {
    margin: 0 0.6em;
  }
  h1 {
    font-size: 0.85em;
  }
  p.w3lstext {
    margin: 0.8em auto;
  }
  .w3layouts-errortext {
    padding-top: 0em;
  }
  .w3top-nav-right {
    margin-top: 1em;
  }
  .agile-search input[type="submit"] {
    padding: 0.6em 2em;
  }
  .copyright {
    margin: 1em 0 1em;
  }
  .copyright p {
    font-size: 0.8em;
  }
  .w3layouts-errortext h2 {
    font-size: 7em;
  }
}
.btn-back {
  background-color: #0214bd;
  color: #fff;
  font-weight: 500;
  padding: 14px 20px;
  margin: 20px 20px;
  transition: 0.5s all;
}
.btn-back:hover {
  background-color: #fff;
  color: #0214bd;
}
</style>
