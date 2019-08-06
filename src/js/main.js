export default class Main {
    constructor() {
      this.$window = $(window);
      this.$wrapper = $('.wrapper');
      this.$formWrapper = $(".form-container");
      this.$form = $('.form');
      this.$defaultForm = $(".form-wrapper:first");
      this.$password = $("#password"); 
      this.$confirmPassword = $("#confirm-password");
      this.$tabcontent = $(".form-wrapper");
      this.$link = $('.nav_link');
    }
    validatePassword() {
      this.$password.val() != this.$confirmPassword.val() ?
        this.$confirmPassword[0].setCustomValidity("Passwords Don't Match") :
        this.$confirmPassword[0].setCustomValidity('');
    }
    openForm(event) {
      event.preventDefault();
      let formToHide = $(event.target).parent().parent();
      let index = formToHide.index();
      formToHide.hide();
      index === 0 ? $(this.$tabcontent[1]).show() : $(this.$tabcontent[0]).show();
    }
  }