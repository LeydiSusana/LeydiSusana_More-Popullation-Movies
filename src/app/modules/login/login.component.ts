import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConstantUri } from 'src/app/utils/constantUri';
import { ApiService } from 'src/app/utils/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logo= proporties.logo;
  formsLogin: FormGroup= new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private readonly apiService: ApiService<any>
  ){ }
    ngOnInit(): void{
    this.formLogin = this.fb.group({
      username: [ '', Validators.required],
      password: [ '', Validators.required],
    });
    }
    login:() {
      if (this.formLogin.valid){
      this.formLogin.marckAllAsTouched();
      for (const key in this.formLogin.control){
        //console.log(key)
        this.formLogin.control[key].marckAsDirty();
      }
       return ;
      }
      const {username, password} =this.formLogin.value;

      this.apiService.postService(configPost);
      const body = {
        username,// Usuario como aparezco
        password, //mi contraseña
        request_token: "" //Clave de api
      }
      const confingPost = { url: ConstantUri.validateWhitLogin, params:{api_key:ConstantUri, apikey}, body};
      this.apiService.postService(configPost).subscribe(val=> {

        console.log(val);
        sessionStorage.setItem('request_token');
      });

      console.log(this.formLogin.value);
    }
  }


