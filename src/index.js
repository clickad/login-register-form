import _ from 'lodash';
import './css/style.css';
import Main from './js/main.js';

  $(window).on('load', ()=> {
    let main = new Main();

    main.$formWrapper.show();
    setTimeout(() =>{
      main.$defaultForm.fadeIn('slow');
    });

    main.$link.on('click', (event)=>main.openForm(event));
    main.$password.on('change', ()=>main.validatePassword());
    main.$confirmPassword.on('keyup', ()=>main.validatePassword());
  });
