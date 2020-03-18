import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private db: AngularFirestore, private afAuth: AuthService) { }

  codes: string[] = ['en', 'es', 'fr', 'it', 'ko', 'ru'];
  codeNames: string[] = ['English', 'Spanish', 'French', 'Italian', 'Korean', 'Russian'];
  

  ngOnInit() {
  }

  changeLanguage(langCode: string) {
    const uid = this.afAuth.Auth.auth.currentUser.uid;
    if (this.codes.includes(langCode)){
      const collection = this.db.collection('users').doc(uid);
      collection.update(
        { 'user.language': langCode }).then(() => console.log('field updated'));
    }
  }
}
