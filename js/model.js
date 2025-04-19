const courseDetails = {
  'BATC001': {
    title: 'Basic to Advanced Tailoring Course',
    content: `
      <strong>What You'll Learn:</strong>
      <p>
      ✅ Introduction to Sewing Tools & Machine Handling<br>
      ✅ How to Take Accurate Body Measurements<br>
      ✅ Cutting & Stitching Techniques for Perfect Fitting<br>
      ✅ Drafting Patterns for Blouses, Churidars, Skirts, Petticoats & More<br>
      ✅ Neckline & Sleeve Variations<br>
      ✅ Seam Finishing, Hemming & Overlocking Techniques<br>
      ✅ Designing Custom Outfits (Traditional & Modern Styles)<br>
      ✅ Tips for Fabric Selection & Maintenance<br>
      </p>
    `
  },
  'SBSC002': {
    title: 'Saree Blouse Stitching Course',
    content: `
      <strong>What You'll Learn:</strong>
      <p>
      ✅ Understanding Basic Sewing Tools & Machines<br>
      ✅ How to Take Accurate Body Measurements<br>
      ✅ Drafting & Cutting a Basic Blouse Pattern<br>
      ✅ Stitching Techniques for a Perfect Fit<br>
      ✅ Neckline & Sleeve Variations (Basic Round, Boat Neck, etc.)<br>
      ✅ Hook, Zipper, and Button Attachments<br>
      ✅ Finishing & Perfecting Your Blouse<br>
      </p>
    `
  },
  'BLAC001': {
    title: 'Basic Level Aariwork Course',
    content: `
      <strong>What You'll Learn:</strong>
      <p>
      ✅ Things Provided<br>
      ✅ Introduction to Aari Work & Essential Tools<br>
      ✅ Basics of Fabric Selection for Aari Embroidery<br>
      ✅ Fundamental Stitches (Chain Stitch, Zig-Zag, Beadwork, etc.)<br>
      ✅ Thread Work & Zari Embroidery Techniques<br>
      ✅ Simple Motif & Pattern Designing<br>
      ✅ Hands-on Practice on Sample Fabrics<br>
      ✅ Basic Techniques for Bridal & Casual Aari Work<br>

      </p>
    `
  },
  'ALAC002': {
    title: 'Advanced Level Aariwork Course',
    content: `
      <strong>What You'll Learn:</strong>
      <p>
      ✅ Things Provided<br>
      ✅ Mastering Intricate Aari Stitches: Full Course on Complex Stitching Patterns<br>
      ✅ Creating Detailed Designs: Floral, Paisley, and Geometric Motifs<br>
      ✅ Using Threads and Beads for Embellishments: Incorporating Zari, Pearls, Sequins, and Stones<br>
      ✅ Working with Heavy Fabrics: Silk, Velvet, and Georgette<br>
      ✅ Layering & Mixing Different Materials for Textured Effects<br>
      ✅ Creating Custom Designs for Bridal Wear & Special Occasions<br>
      </p>
    `
  },
  'HMAC001': {
    title: 'Henna Mixology & After Care Products',
    content: `
      <strong>What You'll Learn:</strong>
      <p>
      ✅ Things Provided<br>
      ✅ Understanding Natural Henna: Types & Sourcing Quality Henna Powder<br>
      ✅ Step-by-Step Henna Mixing Techniques for Deep Stains<br>
      ✅ Choosing the Right Ingredients: Essential Oils, Liquids & Additives<br>
      ✅ Consistency Mastery: Achieving the Perfect Henna Paste for Smooth Application<br>
      ✅ Cone Making & Storage Tips for Long-Lasting Freshness<br>
      ✅ Stain Development & Aftercare for Dark, Long-Lasting Results<br>
      </p>
    `
  },
  'BHDC002': {
    title: 'Basic Henna Designing Course',
    content: `
      <strong>What You'll Learn:</strong>
      <p>
      ✅ Things Provided<br>
      ✅ Introduction to Henna Art & Its Cultural Significance<br>
      ✅ Understanding Henna Cones: How to Hold & Control for Smooth Application<br>
      ✅ Basic Henna Strokes: Lines, Dots, Swirls, and Leaf Patterns<br>
      ✅ Simple Floral, Paisley & Mandala Designs<br>
      ✅ Finger & Palm Henna Designs for Beginners<br>
      ✅ Creating Elegant Borders & Minimalist Henna Patterns<br>
      </p>
    `
  }
};

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('courseModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');
  const closeBtn = document.getElementsByClassName('close')[0];

  // Add click event to all Read More buttons
  document.querySelectorAll('.detail-box a').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const courseId = this.closest('.detail-box').querySelector('h5').textContent.split('-')[1].trim();
      if (courseDetails[courseId]) {
        modalTitle.innerHTML = courseDetails[courseId].title;
        modalContent.innerHTML = courseDetails[courseId].content;
        modal.style.display = 'block';
      }
    });
  });

  // Close modal when clicking (×) button
  closeBtn.onclick = function () {
    modal.style.display = 'none';
  }

  // Close modal when clicking outside
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }
});




