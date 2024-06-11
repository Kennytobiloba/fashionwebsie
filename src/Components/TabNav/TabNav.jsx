import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import RelatedProduct from '../RelatedProduct/RelatedProduct';
import { Review } from '../../assets/assets';


const TabNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabChange = (e) => {
    setActiveIndex(e.index);
  };

  return (
    <div className="w-full mt-20 shadow-lg rounded-lg">
      <TabView activeIndex={activeIndex} onTabChange={handleTabChange} className="custom-tabview">
        <TabPanel header={<span className={`lg:text-[22px] md:text-[20px] text-[18px] font-semibold border-b-1  border-[#cf802e] ${activeIndex === 0 ? 'border-b-4   border-[#cf802e] text-[#cf802e]' : 'text-black hover:text-[#cf802e]'}`}>DESCRIPTION</span>}>
        <div className="border-b border-[#f9dab6]"></div>
          
          <div className="p-4">

            <p className="mt-2 text-black text-[18px] dark:text-gray-300">
              Lorem ipsum dolor sit amet, saepe vitae gubergren pro cu, sit eros animal invidunt ei, ex nec munere legere incorrupte. Eum an vocent commodo referrentur, no veniam maiestatis vim. Est verear nusquam delicata id, mea natum movet eripuit at. Eu quot virtute usu, nonumy eruditi suscipit duo et. Nam eu dicta tamquam apeirian, has ei verear periculis vituperatoribus. Est summo nemore ne. Nam ex posse argumentum eloquentiam, saepe similique interpretaris nec ex, ridens suscipit scriptorem ex mel.
            </p>
            <div className='mt-10'>
            <RelatedProduct/>
            </div>
          </div>
        </TabPanel>
        <TabPanel header={<span className={`lg:text-[22px] md:text-[20px] text-[18px]  font-semibold ${activeIndex === 1 ? 'border-b-4 border-[#cf802e] text-[#cf802e]' : 'text-black hover:text-[#cf802e]'}`}>INFORMATION</span>}>
        <div className="border-b border-[#f9dab6]"></div>
          <div className="p-4">
          <div >
          <span className='font-bold text-[20px]'>Weight </span>
          <span className='text-lg'>/ 0.9 kg</span>
          </div>
            <div>
            <h4> <span className='text-[20px] font-bold'>Dimensions </span>
           <span className='text-lg'>/ 50 × 20 × 10 cm </span>
           </h4>
            </div>
          
            <div className='mt-10'>
            <RelatedProduct/>
            </div>
          </div>
        </TabPanel>
        <TabPanel header={<span className={`lg:text-[22px] md:text-[20px] text-[18px]  font-semibold ${activeIndex === 2 ? 'border-b-4 border-[#cf802e] text-[#cf802e]' : 'text-black hover:text-[#cf802e]'}`}>REVIEW (2)</span>}>
        <div className="border-b border-[#f9dab6]"></div>
          <div className="p-4">
           <div>
            {
              Review.map((item ,id) => (
                <div key={id} className='flex gap-6 mb-4'>
                  <div>
                    <img src={item.image} alt="" />
                  </div>
                  <div className='flex-1'>
                  <span className='flex gap-2 text-[14px] mt-2 text-[#cf802e]'>
                        <i className="fa fa-star "></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </span>
                    <h3 className='text-[16px] font-bold mt-2'>{item.date}</h3>
                    <h3 className='text-[20px] mt-2 font-bold'>{item.name}</h3>
                    <h3 className='text-[16px]'>{item.text}</h3>
                  </div>

                </div>
              ))
            }

           </div>
           <div>
            <h1 className='text-2xl mt-6 font-bold'>ADD A REVIEW</h1>
            <p className='w-[52%]'>Your email address will not be published. Required fields are marked *
            Your rating</p>
            <span className='flex gap-2 text-[14px] mt-4 text-[#cf802e]'>
                        <i className="fa fa-star "></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </span>

            <textarea name="" placeholder='Your Review' className=' p-2 text-[16px] w-[100%] h-[20vh] mt-4 border-2 border-gray-300'></textarea>
            <div className='mt-4 flex gap-4 mb-2'>
              <input type="text" placeholder='Your Name' className='p-2 border-2 w-[50%] border-gray-300' />
              <input type="text" placeholder='Your Email' className='p-2 border-2 w-[50%] border-gray-300' />
            </div>
            <div className='text-lg flex gap-4 text-bold mt-4'>
              <input type="checkbox" />
              <span>Save my name and email in this browser for the next time I comment.</span>
            </div>
            <h6 className="mt-8 "><a className="button  hover:bg-gray-500 px-12 mt-4 py-4  text-white bg-[#cf802e]" href="#">Submit</a></h6>
           </div>
            
            <div className='mt-10'>
            <RelatedProduct/>
            </div>
          </div>
        </TabPanel>
      </TabView>


   
    </div>
  );
};

export default TabNav;
