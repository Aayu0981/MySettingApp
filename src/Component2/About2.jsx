import React from 'react'

function About2() {
  return (
    <div>
     <span>All specs</span>


     <div className='one'  style={{backgroundColor:'red',height:300,width:350,borderRadius:20}}>
     <img src="data:image/png;base64,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" style={{width:20,height:20,marginTop:30}} />
      <p>RAM</p>
      <p>6.0 GB</p>

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPSg14mJBe136u8n8Ow9yfnH1DDG-s9SG7A&usqp=CAU" style={{width:20}} />
      <p>CPU</p>
      <p>Helio G96</p>
      <p>Octa-core Max 2.05GHz</p>
     </div>

       
       <div className="second" style={{backgroundColor:'red',height:100,width:350,borderRadius:20,marginTop:10}}>
        <p>Android Version</p>
        <p>12SP1A.210812.016</p>
       </div>

       <div className="third" style={{display:'flex'}}>
        
        <div style={{backgroundColor:'red',height:130,width:200,borderRadius:20,marginTop:10}}>
            <p>Android security Update</p>
            <p>2023-04-01</p>
        </div>
       

       <div style={{backgroundColor:'red',height:130,width:200,borderRadius:20,marginTop:10}}>
        <p>MIUI version</p>
        <p>MIUI Global<br/>
        13.0.5 Stable<br/>
        13.0.5.0(SKEINXM)
        </p>
       
       </div>
       </div>

       <div className="fourth"  style={{backgroundColor:'red',height:150,width:350,borderRadius:20,marginTop:10}}>
        <p>Model<br/>
        2201117PI</p>

        <p>Baseband version<br/>
        MOLY.LR13,R2.MP.V16.1.P59</p>

        <p>Kernel version<br/>
        4.14.186-perf-g8068275caa57</p>
       </div>
       

       <div className="fith" style={{backgroundColor:'red',height:100,width:350,borderRadius:20,marginTop:10}}>
        <p>Internal storage</p>
          <p style={{fontSize:14,color:'grey',gap:10}}> Available storage 4.7 GB/Total storage 64.0.GB
        </p>
       
       </div>


     </div>
  )
}

export default About2