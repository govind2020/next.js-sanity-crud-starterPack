export default {
  name: 'ecomm',
  title: 'Ecomm',
  type: 'document',
  fields: [
   {
    name : 'image',
    title : 'image',
    type : 'array' ,
    of : [{type : 'image'}],
    options : {
      hotspot : true
    }
   },
   {
    name : 'name',
    title : 'Name',
    type : 'string'
   },
   {
    name : 'slug',
    title : 'Slug',
    type : 'slug',
    options : {
      source : 'name',
      maxLength : 90,
    }
   },
   {
    name : 'price',
    title : 'price',
    type : 'number'
   },
   {
    name : 'details',
    title : 'Details',
    type : 'string'
   },

  ],
}
