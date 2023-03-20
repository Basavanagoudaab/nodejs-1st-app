const request =require('./comon');
const token =require('./token');
const faker = require('@faker-js/faker');


describe( 'posting', ()=>{
  it ("",async()=>{
    const data={
      user_id:4914,
      titel:faker.titel,
      body:faker.body,
    };
    const res =await request.post('/post')
    .set ('authorization', `bearer ${token}`)
    .send(data);
  
  })
})