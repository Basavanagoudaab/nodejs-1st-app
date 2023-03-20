const request =require('./comon');
const token =require('./token');
const { expect } = require('chai');



describe( 'user-advance', ()=>{
const data= { 
  email:'test2@mail.ca',
  name:'Test name',
  gender:'male',
  status:'incactive'
};
it('post/user',()=>{
   return request.post('v2/user').set('authorization',`bararer ${token}`)
   .send (data)
 .then(res  => {
    console.log(res.body)
    expect(res.body,data.email).to.eq(data.email);
  } )
})


it('post/user',()=>{
  return request.post('v2/user').set('authorization',`bararer ${token}`)
  .send (data)
.then(res  => {
   console.log(res.body)
   expect(res.body,data.email).to.eq(data.email);
 } )
})
})