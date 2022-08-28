import { LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class CreateRecordUsingUiRecordApi extends LightningElement {

    handleCreateAccount(){
        // get the entered value from UI
        let accountName = this.template.querySelector('lightning-input');
        
        // we have to create an object of fields to enter data
        const fields = {
            Name: accountName.value,
        };
        
        // It's the final object to send CreateRecord method to create
        const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };
        
        // Calling createRecord method of uiRecordApi
        createRecord(recordInput)
            .then(account =>{
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'New account has been created',
                        variant: 'success',
                    }),
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error while creating account',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
            });
    }
}