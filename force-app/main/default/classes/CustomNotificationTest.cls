@isTest
public class CustomNotificationTest {
// 100% Code Coverage
    @isTest
    public static void TestData(){
        Lead led = new Lead();
        led.LastName = 'Ajeet';
        led.Company = 'Salesforce';
        led.Status = '	Open - Not Contacted';
        led.Followup_Date__c = System.Today();
        insert led;
    }
}