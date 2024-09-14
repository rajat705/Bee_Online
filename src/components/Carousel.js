import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css'; 
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome for icons

const teamMembers = [
  {
    name: "Julian Jameson",
    profession: "Physicist",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com"
    }
  },
  {
    name: "Harry Dev",
    profession: "Engineer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com"
    }
  },
  {
    name: "Tronklin",
    profession: "Scientist",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com"
    }
  },
  {
    name: "Was Ten ",
    profession: "Designer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com"
    }
  },
  {
    name: "Julian Som",
    profession: "Physicist",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com"
    }
  },
  {
    name: "Rollin Jameson",
    profession: "Engineer",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com"
    }
  },
  {
    name: "Julian",
    profession: "Scientist",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com"
    }
  },
  {
    name: "Jameson",
    profession: "Designer",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com"
    }
  }
];

const CustomCarousel = () => {
  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Get Quality Education</h2>
      <p className="carousel-subtitle">
        Problems trying to resolve the conflict between Newtonian mechanics and quantum physics.
      </p>

      <div className="carousel-wrapper">
        <div className="d-flex justify-content-center">
          {teamMembers.map((member, index) => (
            <div className="card-container mx-3" key={index}> {/* mx-3 adds horizontal spacing */}
              <img src={member.image} className="profile-img" alt={member.name} />
              <div className="card-details">
                <h3>{member.name}</h3>
                <p>{member.profession}</p>
                <div className="social-icons">
                  {/* Social Icons */}
                  <a href={member.socials.facebook} className="fa fa-facebook"></a>
                  <a href={member.socials.instagram} className="fa fa-instagram"></a>
                  <a href={member.socials.twitter} className="fa fa-twitter"></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;
