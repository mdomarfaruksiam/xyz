import React, { useState } from 'react';
import ProductCartAndAll from '../../Components/products/ProductCartAndAll';
import { FaStar, FaRegStar, FaTruck, FaShieldAlt, FaUndo, FaUserCircle } from 'react-icons/fa';

export default function Product() {
  // Variant States
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Charcoal');

  // Comment & Review Section States
  const [reviews, setReviews] = useState([
    { id: 1, name: 'Tanvir Rahman', rating: 5, date: 'June 12, 2026', comment: 'Excellent tile quality! The finish is incredibly premium and looks wonderful in my living room.' },
    { id: 2, name: 'Sultana Ahmed', rating: 4, date: 'May 28, 2026', comment: 'Very durable. Delivery was safe and packed well. Minor variation in shade but beautiful.' }
  ]);
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newName, setNewName] = useState('');

  // Handle Review Submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim() || !newName.trim()) return;

    const newReviewObj = {
      id: Date.now(),
      name: newName,
      rating: newRating,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      comment: newComment
    };

    setReviews([newReviewObj, ...reviews]);
    setNewComment('');
    setNewName('');
    setNewRating(5);
  };

  return (
    <main className='container mx-auto p-2 relative my-6'>
      <section className='flex flex-col md:flex-row gap-8'>

        {/* Left Column: Media */}
        <ProductCartAndAll />

        {/* Right Column: Product Info */}
        <div className='flex-1 space-y-6'>

          {/* Brand & Title */}
          <div className='space-y-1'>
            <span className='text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-1 rounded'>
              Akij Group
            </span>
            <h1 className='text-2xl md:text-3xl font-extrabold text-copy tracking-tight mt-2'>
              Premium Ceramic Flooring Tile
            </h1>
            <p className='text-sm text-muted/80'>SKU: AKJ-7740-X1</p>
          </div>

          {/* Ratings & Reviews Breakdown */}
          <div className='flex items-center gap-3 border-b border-border pb-4'>
            <div className='flex text-warning gap-0.5'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar className='text-muted' />
            </div>
            <span className='text-sm font-semibold text-copy'>(4.0)</span>
            <span className='text-sm text-muted/80'>|</span>
            <a href='#reviews-list' className='text-sm font-medium text-info hover:underline'>
              {reviews.length} Customer Reviews
            </a>
          </div>

          {/* Pricing Section */}
          <div className='space-y-1'>
            <div className='flex items-baseline gap-3'>
              <span className='text-3xl font-black text-copy'>$45.00</span>
              <span className='text-lg text-muted line-through'>$60.00</span>
              <span className='text-sm font-bold text-success bg-success/10 px-2 py-0.5 rounded'>
                25% OFF
              </span>
            </div>
            <p className='text-xs text-muted'>Excluding taxes & shipping calculated at checkout</p>
          </div>

          {/* Product Description Brief */}
          <p className='text-copy/90 text-sm leading-relaxed max-w-xl'>
            Engineered with ultra-durable high-grade materials, this premium collection features stain-resistant surfaces and reinforced edges designed to elevate modern architectural spaces.
          </p>

          <hr className='border-border' />

          {/* Variants Pickers */}
          <div className='space-y-4'>
            {/* Color Picker */}
            <div className='space-y-2'>
              <span className='text-sm font-bold text-copy'>Color: {selectedColor}</span>
              <div className='flex gap-2'>
                {['Charcoal', 'Alabaster', 'Bronze'].map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1 text-xs font-semibold rounded-md border transition-all ${selectedColor === color
                      ? 'border-accent bg-accent text-bg'
                      : 'border-border bg-surface text-copy hover:border-muted'
                      }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Picker */}
            <div className='space-y-2'>
              <span className='text-sm font-bold text-copy'>Size</span>
              <div className='flex gap-2'>
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 text-xs font-bold rounded-md border flex items-center justify-center transition-all ${selectedSize === size
                      ? 'border-accent bg-accent text-bg ring-2 ring-accent/20'
                      : 'border-border bg-surface text-copy hover:border-muted'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Stock Availability Status */}
          <div className='flex items-center gap-2 text-sm font-semibold'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-success'></span>
            </span>
            <span className='text-success'>In Stock (Ready to Ship)</span>
          </div>

          <hr className='border-border' />

          {/* Core Trust Badges */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium text-copy/80'>
            <div className='flex items-center gap-2.5 p-3 bg-surface rounded-lg border border-border'>
              <FaTruck className='text-lg text-accent' />
              <span>Free Local Shipping</span>
            </div>
            <div className='flex items-center gap-2.5 p-3 bg-surface rounded-lg border border-border'>
              <FaShieldAlt className='text-lg text-accent' />
              <span>3-Year Akij Warranty</span>
            </div>
            <div className='flex items-center gap-2.5 p-3 bg-surface rounded-lg border border-border'>
              <FaUndo className='text-lg text-accent' />
              <span>30-Day Easy Returns</span>
            </div>
          </div>

          <hr className='border-border' />

          {/* Comment & Review Section */}
          <div id='reviews-list' className='space-y-6 pt-2'>
            <h3 className='text-lg font-bold text-copy tracking-tight'>Customer Reviews & Feedback</h3>

            {/* Write a review Form if the user is logged in then the form will open else not */}
            <form onSubmit={handleReviewSubmit} className='bg-surface border border-border p-4 rounded-xl space-y-4 shadow-sm'>
              <h4 className='text-sm font-bold text-copy'>Write a Review</h4>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='space-y-1'>
                  <label className='text-xs font-semibold text-muted/90'>Your Name</label>
                  <input
                    type='text'
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder='John Doe'
                    className='w-full p-2 border border-border bg-bg rounded-lg text-sm focus:outline-none focus:border-accent'
                    required
                  />
                </div>

                <div className='space-y-1'>
                  <label className='text-xs font-semibold text-muted/90'>Rating</label>
                  <div className='flex gap-1 pt-1.5'>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type='button'
                        key={star}
                        onClick={() => setNewRating(star)}
                        className='text-lg transition-colors focus:outline-none'
                      >
                        {star <= newRating ? (
                          <FaStar className='text-warning' />
                        ) : (
                          <FaRegStar className='text-muted' />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className='space-y-1'>
                <label className='text-xs font-semibold text-muted/90'>Review Comment</label>
                <textarea
                  rows='3'
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder='Share your experience with this product...'
                  className='w-full p-2 border border-border bg-bg rounded-lg text-sm focus:outline-none focus:border-accent resize-none'
                  required
                />
              </div>

              <button
                type='submit'
                className='px-4 py-2 bg-accent text-bg font-semibold text-xs rounded-lg border border-accent hover:bg-accent/90 transition-all'
              >
                Submit Review
              </button>
            </form>

            {/* Displaying Review List */}
            <div className='space-y-4 divide-y divide-border'>
              {reviews.map((review) => (
                <div key={review.id} className='pt-4 first:pt-0 flex gap-3 items-start'>
                  <FaUserCircle className='text-3xl text-muted/50 mt-0.5 shrink-0' />
                  <div className='space-y-1 w-full'>
                    <div className='flex justify-between items-center w-full'>
                      <h5 className='text-sm font-bold text-copy'>{review.name}</h5>
                      <span className='text-xs text-muted'>{review.date}</span>
                    </div>

                    <div className='flex text-warning gap-0.5 text-xs pb-1'>
                      {[...Array(5)].map((_, i) => (
                        i < review.rating ? <FaStar key={i} /> : <FaRegStar key={i} className='text-muted' />
                      ))}
                    </div>

                    <p className='text-sm text-copy/90 leading-normal'>{review.comment}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}