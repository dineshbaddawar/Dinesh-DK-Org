@isTest
public class accPhoneUpadateTest {

    @isTest
    public Static void ChekData(){
        
       // Account acc = [SELECT Id,Phone FROM Account WHERE Phone != null LIMIT 1];        
        Contact con = new Contact();
        con.LastName = 'Dinesh';
        con.Phone ='123456789';
       // con.AccountId = acc.Id;
        insert con;
      
        
    }
}