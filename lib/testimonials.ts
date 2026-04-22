export type Testimonial = {
  readonly quote: string;
  readonly name: string;
};

export const testimonials: readonly Testimonial[] = [
  {
    name: "J.V.",
    quote:
      "Ben Gharagozli is an outstanding member of the Bar and has demonstrated his excellence in representing my interests in a family matter. Mr. Gharagozli is diligent, thorough, communicative, straight forward, and impeccably honest in his assessments of the issues and context in the matters he litigates and, most importantly, he is equally honest and forthright to the clients he represents. Mr. Gharagozli has my utmost unequivocal confidence in handling the most delicate, provocative, and complicated legal matters and that is why I will continue to avail myself of his services.",
  },
  {
    name: "K.M.",
    quote:
      "I retained Ben's services to represent me in a civil suit that he filed on my behalf in 2011. Not only was he able to quickly grasp the facts of a complicated case as I presented them to him but he was able to see things that I had not been aware of at the outset. The case required numerous filings and cross-complaints as well as travelling from southern California to the Bay Area where the case was being heard. He devoted a tremendous amount of time and effort to secure a satisfactory outcome. In the end Ben was able to reach a good settlement for me with the other party. I would wholeheartedly recommend Ben's services to anyone searching for an attorney.",
  },
  {
    name: "M.M.",
    quote:
      "It is with the utmost pleasure that I recommend Mr. Ben Gharagozli as a superb attorney. Mr. Gharagozli is my third attorney in a litigation case. I was frustrated with both of them as they failed to pay attention to the details in the case and follow up on it. There were times when I had to do independent research on my own and coach my attorneys. When Mr. Gharagozli took the case, he immediately began working on it. He accomplished in two weeks what the other two attorneys did not accomplish in 6 months. Ben represented me beyond my expectations. He is extremely knowledgeable, focused, efficient and readily available when I have questions. He actually takes his time to educate you about the case. He possesses other qualities worth mentioning. He is the consummate professional, has high levels of integrity and is extremely ethical. I truly consider him not only a practitioner of law but also a legal scholar. Of this I am convinced. As a college professor I give him a solid A.",
  },
  {
    name: "A.H.",
    quote:
      "Mr. Behnam Gharagozli is a superb attorney with extensive experience in law. But what I found to be most amazing and far beyond what I expected was the level of personal attention that he paid to my case. He provided me with excellent service in a timely manner and kept me informed of the progress of the case every step of the way. He is a knowledgeable, caring and aggressive attorney. I would recommend Mr. Gharagozli to any person looking for legal help from an excellent attorney with tremendous integrity.",
  },
  {
    name: "A.E.",
    quote:
      "The sophistication of services that this firm provides is superb. Not only is the firm knowledgeable, it understands the sensitivities of the human element of the law that most attorneys forget. Given the firm's diligent, thorough and aggressive representation, I recommend the firm without reservation.",
  },
  {
    name: "D.S.",
    quote:
      "Ben got the job done. I couldn't have asked for anything more than showing up and working hard on the case. Through his hard work, we were able to get the original charges dropped and I left a happy client.",
  },
  {
    name: "R.G.",
    quote:
      "Ben Gharagozli represented me as my attorney in court due to some unfortunate choices I made last year. I wished I had contacted him earlier! Ben asked me the right questions always without judgement and helped guide me through the legal process. He encouraged me and explained exactly what was going on and what I needed to do and when it needed to be done. He would call and check on me to make sure I was holding up OK and even picked me up from work to get me to court when he felt I should be there in person. I am sure I would be in a lot deeper trouble if I did not have Ben helping me along the way. If I ever need legal help again or if someone I know needs help, I will certainly call Ben.",
  },
  {
    name: "S.R.",
    quote:
      "Whenever I have ever had a legal issue, Mr. Gharagozli has been the first attorney that I call. He knows when to be aggressive and when to seek settlement. Mr. Gharagozli evaluates not only the merits of your case but also the demeanor and personality traits of the opposing party to formulate an excellent strategy on how to go forward. Unlike other attorneys who have the same strategy for every case, he is very particular on how he moves forward based on the particular circumstances and aims of the client. He is extremely skilled in diffusing complex matters before they get out of hand. On several occasions, he has assisted me in settling disputes without having to go to Court. He is very patient and is able to quickly understand intricate facts. Having worked with other lawyers before, I would recommend Mr. Gharagozli without reservation for anyone who has a legal issue or needs legal advice.",
  },
  {
    name: "F.H.",
    quote:
      "I was in a complicated divorce and child custody battle and my lawyers at a different firm were not being helpful in explaining what I should be doing or what my long-term strategy should be. I contacted Mr. Gharagozli, and his multiple consultations saved me a lot of money and took a lot of anxiety out of what was going on.",
  },
  {
    name: "L.H.",
    quote:
      "I came to Mr. Gharagozli for legal help in December 2011 with regard to an ongoing Child Custody/Visitation case for which I was previously self-represented. He explained each step of the process in a way I could understand, helped me complete all of the necessary documents, and provided advice when I was unsure. Thanks to his help, I ended up succeeding and was granted the custody order I had hoped for. Mr. Gharagozli was extremely professional and courteous during our entire partnership and truly had a unique way of comforting me when I felt everything was hopeless. I would highly recommend Mr. Gharagozli for assistance with any legal matter and am confident that he can do for someone else what he achieved for me.",
  },
];

/** Shorter quotes that fit the homepage rotating carousel */
export const CAROUSEL_NAMES = ["D.S.", "A.E.", "F.H.", "A.H."];
export const carouselTestimonials = testimonials.filter((t) =>
  CAROUSEL_NAMES.includes(t.name)
);
