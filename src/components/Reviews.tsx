import React from "react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Socrate Concepcion",
      location: "US",
      date: "December 29, 2024",
      avatar: "C",
      avatarBg: "bg-orange-500",
      title: "abcAI has been a Game-Changer for My Business!",
      content: "I can't recommend abcAI enough. It's like having a personal business coach 24/7, mapping out steps to grow my company and clarifying my priorities. I feel a renewed sense of focus and control every day.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sami Liftoff",
      location: "US",
      date: "Dec 10, 2024",
      avatar: "OZ",
      avatarBg: "bg-gray-600",
      title: "abc X Saved Me Time",
      content: "Signed up for abc X—it felt overwhelming at first, but once it understood how I think, it turned into a creative powerhouse. Support is top-notch, and the daily integrations impress me.",
      rating: 5,
    },
    {
      id: 3,
      name: "Bayan Qandil",
      location: "US",
      date: "December 30, 2024",
      avatar: "B",
      avatarBg: "bg-purple-500",
      title: "Early but satisfied user",
      content: "I've only been using abc for a couple of weeks, but the experience has been great—especially with the social media bot reaching out to me with new ideas. The pull model feels super proactive and makes me more confident in my daily tasks.",
      rating: 5,
    },
  ];

  const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-green-500" : "text-gray-700"} fill-current`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-black min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl text-white font-medium max-w-5xl mx-auto leading-tight mb-8">
            Helpers of the month, <br className="hidden md:block" />
            every month.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-4xl leading-relaxed">With over 40,000 entrepreneurs from more than 100 countries, abc is the world's leading provider of business automation tools and AI-powered solutions, including AI for marketing, AI for customer support, and more.</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-10">
          {reviews.map((review) => (
            <div key={review.id} className="bg-[#0d0d0d] backdrop-blur-sm border border-gray-800 rounded-2xl p-4">
              {/* Avatar */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${review.avatarBg} rounded-full flex items-center justify-center text-white font-semibold text-lg`}>{review.avatar}</div>
              </div>

              {/* Title */}
              <h3 className="text-white text-xl font-semibold mb-4 leading-tight">{review.title}</h3>

              {/* Star Rating */}
              <StarRating rating={review.rating} />

              {/* Review Content */}
              <p className="text-gray-300 text-base leading-relaxed mb-6">{review.content}</p>

              {/* Author Info */}
              <div className="flex items-center text-gray-500 text-sm">
                <span>{review.date}</span>
                <span className="mx-2">•</span>
                <span>{review.name}</span>
                <span className="mx-2">•</span>
                <span>{review.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
