const request =require('./comon');

const token =require('./token');

const { expect } = require('chai');





describe( 'user', ()=>{
  it( 'get/uesr',(done)=>{
    request.get(`users?access-token= ${token}`)
    .end((err,res) => {
      console.log(res.body)
      console.log(err)
      expect(res.body.data).to.not.be.empty;
      done();

    });

  })


  it( 'get/uesr',(done)=>{
    request.get(`users?access-token= ${token}`)
    .end((err,res) => {
      console.log(res.body)
      console.log(err)

      expect(res.body.data).to.not.be.empty;
      done();

    });

  })
})

