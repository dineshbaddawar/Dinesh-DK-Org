public class accPhoneUpadateHelper {

    public Static void UpdateAccPhone(List<Contact> conList){
        List<Account> accList = new List<Account>();
        for(Contact con : conList){
            Account ac = [SELECT Id,Phone FROM Account Where Id =: con.AccountId LIMIT 1 ];
            ac.phone= con.phone;
            accList.add(ac);
        }
        update accList;
    }
}