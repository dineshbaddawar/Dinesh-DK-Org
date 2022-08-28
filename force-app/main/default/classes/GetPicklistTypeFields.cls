public with sharing class GetPicklistTypeFields {
     
    @AuraEnabled(cacheable=true)
    public static Map<String,String> getAllPicklistTypeFields(String strAccountName) {
        Map<String, Schema.SObjectType> detail = Schema.getGlobalDescribe();
        Map<String,String> mapOfPicklistTypeFields = new  Map<String,String>();
        for(Schema.SObjectField fields :detail.get(strAccountName).getDescribe().fields.getMap().Values()) {
            If(fields.getDescribe().getType() == Schema.DisplayType.PICKLIST) { 
                mapOfPicklistTypeFields.put(fields.getDescribe().getName() , fields.getDescribe().getName());
            }
        }
        return mapOfPicklistTypeFields;
    }
    @AuraEnabled(cacheable = true)
    public static Map<String,String> getOptionsForSelectedPicklistField(string selectedObjectName, string selectedField){
        try {
            System.debug('selectedObjectName '+selectedObjectName);
            System.debug('selectedField '+selectedField);
            Map<String,String> options = new  Map<String,String>(); 
            Map<String, Schema.SObjectField> mapFields = Schema.getGlobalDescribe().get(selectedObjectName).getDescribe().fields.getMap();
            Schema.DescribeFieldResult pickFieldResult = mapFields.get(selectedField).getDescribe();   
            List<Schema.PicklistEntry> picklistFields1 = pickFieldResult.getPicklistValues();
                for( Schema.PicklistEntry pickListFields2 : picklistFields1)
                {
                    options.put(pickListFields2.getLabel(),pickListFields2.getValue());
                }       
            return options;
        } catch (Exception e) {
            return null;
        }
    }
}