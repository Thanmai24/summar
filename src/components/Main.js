import React from 'react'
import '../Main.css'
import reaction_image from '../images/icon-reaction.svg'
import memory_image from '../images/icon-memory.svg'
import verbal_image from '../images/icon-verbal.svg'
import visual_image from '../images/icon-visual.svg'
function Main() {
   return (
      <div className = 'main-page'>
         <div className='card'>
            <div className='result'>
               <div className="result_heading">Your Result</div>
               <div className="result_value">
                  <div className='value'>76</div>
                  <div className='total'> of 100 </div>
               </div>
               <div className="result_appreciation">Great</div>
               <div className="result_description">
                  You scored higher than 65% of the people who have taken these tests.
               </div>
            </div>
            <div className='summary'>
               <div className="summary_heading">Summary</div>
               <div className='reaction summary-elements'>
               <img src={reaction_image} className ='image-reaction summary-images' alt="x" />
                  <div className="reaction_text summary_text"> Reaction </div>
                  <div className="reaction_value align-right summary_values summary_text">
                    <div className="bolded"> 80 </div>
                    <div className = "unbolded"> /100 </div>
                  </div>
               </div>
               <div className='memory summary-elements'>
                  <img src={memory_image} className = 'image-memory summary-images' alt="" />
                  <div className="memory_text summary_text">Memory</div>
                  <div className="memory_value align-right summary_values summary_text">
                  <div className="bolded"> 92 </div>
                    <div className = "unbolded"> /100 </div>
                  </div>
               </div>
               <div className='verbal summary-elements'>
                  <img src={verbal_image} className = 'image-verbal summary-images'alt="" />
                  <div className="verbal_text summary_text">Verbal</div>
                  <div className="verbal_value align-right summary_values summary_text">
                  <div className="bolded"> 61 </div>
                    <div className = "unbolded"> /100 </div>
                  </div>
               </div>
               <div className='visual summary-elements'>
                  <img src={visual_image} className = 'image-visual summary-images'alt="" />
                  <div className="visual_text summary_text">Visual</div>
                  <div className="visual_value align-right summary_values summary_text">
                  <div className="bolded"> 72 </div>
                    <div className = "unbolded"> /100 </div>
                  </div>
               </div>
               <button className='continue'> Continue</button>
            </div>
         </div>
         {/* <div> hey</div> */}
      </div>
   )
}

export default Main
