import { LightningElement ,api, wire, track} from 'lwc';
import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';
//import getNewAccountList from '@salesforce/apex/AccountHelper.getNewAccountList';
export default class LightningDatatableLWCExample extends LightningElement {
    @track columns = [{
            label: 'Account name',
            fieldName: 'Name',
            type: 'text',
            sortable: true
        },
        {
            label: 'Type',
            fieldName: 'Type',
            type: 'text',
            sortable: true
        },
        {
            label: 'Annual Revenue',
            fieldName: 'AnnualRevenue',
            type: 'Currency',
            sortable: true
        },
        {
            label: 'Phone',
            fieldName: 'Phone',
            type: 'phone',
            sortable: true
        },
        {
            label: 'Website',
            fieldName: 'Website',
            type: 'url',
            sortable: true
        },
        {
            label: 'Rating',
            fieldName: 'Rating',
            type: 'test',
            sortable: true
        }
    ];
 
    @track error;
    @track accList ;
    allAcc;
    someAcc;
    @wire(getAccountList)
    wiredAccounts({
        error,
        data
    }) {
        if (data) {
            console.log(data);
            console.log('Required Length');
            console.log(Object.keys(data).length);
            console.log(Object.keys(data));
            this.allAcc = data;
            this.accList = data.slice(0,5);
        } else if (error) {
            this.error = error;
        }
    }
    handleClick(event) {
        var lim;
        if(event.target.label ==='SHOW MORE')
            this.accList = this.allAcc ;
        if(event.target.label ==='SHOW LESS')
            this.accList = this.allAcc.slice(0,5);

        /*
        getNewAccountList({lim}).then(result =>{
           //console.log(JSON.parse(result));
           this.accList = result ;
            console.log('Object Returned');
            //this.initialiseFullCalendarJs();
            this.error = undefined;
        })
        .catch(error => {
            console.log(error);
            console.log('error');
            this.error = error;
            //this.outputResult = undefined;
        });
        */
  }
    
}