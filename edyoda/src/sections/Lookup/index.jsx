import React from 'react'
import './Lookup.css'

// Icons
import AcademicIcon from "../../assets/icons/Academic.png";
import AdsBanIcon from "../../assets/icons/AdsBanIcon.png";
import ClockIcon from "../../assets/icons/Clock.png";
import BookMarkIcon from "../../assets/icons/Bookmark.png";
import LiveIcon from "../../assets/icons/Live.png";


export default function Lookup() {
  return (
    <>
      <div className="main-lookup">
          {/* Header */}
              <h1 className="main-title">Access curated courses worth
              <br /><span className="bold">&#8377; <span className="line-through">18,500</span></span> at just <span className="bold text-primary">&#8377; 99</span> per year!</h1>
              {/* Pointer 1 */}
              <div className="main-item">
                {/* Icon */}
                    <div className="main-icon">
                        <img src={BookMarkIcon} alt='bookmark' />
                    </div>
                    {/* Text */}
                    <p><span className="text-primary">100+</span> Job relevant courses</p>
              </div>
              {/* Pointer 2 */}
              <div className="main-item">
                    <div className="main-icon">
                        <img src={ClockIcon} alt='bookmark' />
                    </div>
                    <p><span  className="text-primary">20,000+</span> Hours of content</p>
              </div>
              {/* Pointer 3 */}
              <div className="main-item">
                    <div className="main-icon">
                        <img src={LiveIcon} alt='bookmark' />
                    </div>
                    <p><span className="text-primary">Exclusive</span> webinar access</p>
              </div>
              {/* Pointer 4 */}
              <div className="main-item">
                    <div className="main-icon">
                        <img src={AcademicIcon} alt='bookmark' />
                    </div>
                    <p>Scholarship worth <span className="text-primary">&#8377; 94,500</span></p>
              </div>
              {/* Pointer 5 */}
              <div className="main-item">
                    <div className="main-icon">
                        <img src={AdsBanIcon} alt='bookmark' />
                    </div>
                    <p><span className="text-primary">Ad Free</span> learning experience</p>
              </div>
        </div>
    </>
  )
}
