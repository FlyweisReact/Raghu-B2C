import React from 'react'

const DetailResource3 = () => {
    return (
        <>
          <Header />
          <div className="detailResourceFirst">
            <img src={img} alt="" />
            <p style={{fontSize : '1.4rem' , marginTop : '20px'}}>Your first impression matters and it’s your responsibility to make sure that your first impression is up to the mark, especially in a job interview. Let’s discuss the top 5 tips to help you crack a job interview.</p>
          </div>
    
    
          {data.map((i, index) => (
            <div className="detailResourceSecond" key={index}>
              <p className="head"> {i.head} </p>
              <img src={i.image} alt="" />
              {i.desc.map((a, index) => (
                <p className="desc" key={index}>
                  {a}
                </p>
              ))}
            </div>
          ))}
        </>
      );
    };

export default DetailResource3