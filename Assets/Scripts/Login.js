class Login{
    constructor(){

        let me = this;

        // Khởi tạo sự kiện
        me.initEvents();
    }

    // Khởi tạo các sự kiện
    initEvents(){
        let me = this;

        // Khởi tạo sự kiện khi submit form
        $("#btnSubmit").off("click");
        $("#btnSubmit").on("click", me.submitForm.bind(me));
    }

    // Xử lý submit form
    submitForm(){
        let me = this,
            valid = me.validateForm();

        if(valid){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Đăng nhập thành công',
                showConfirmButton: false,
                timer: 1500
              });

              $("#txtUserName").val()
        }else{
            Swal.fire('Tên đăng nhập hoặc mật khẩu không đúng!');
        }
    }

    // Xử lý validate form
    validateForm(){
        let me = this,
            valid = false,
            userName = $("#txtUserName").val(),
            passWord = $("#txtPassWord").val();

        if(userName == "admin" && passWord == "12345678@Abc"){
            valid = true;
        }

        return valid;
    }

    // Thực hiện reset form
    resetForm(){
        $("#txtUserName").val("");
        $("#txtPassWord").val("");
    }
}

// Tạo đối tượng trang
var login = new Login();

