import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    areDetailsVisible = false;
    handlechange(event){
        this.areDetailsVisible = event.target.checked;
    }
}