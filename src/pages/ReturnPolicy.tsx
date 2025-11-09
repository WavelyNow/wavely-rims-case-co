import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold font-poppins mb-8">Return & Refund Policy</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm italic">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          {/* Important Notice */}
          <div className="bg-yellow-500/10 border-2 border-yellow-500/30 rounded-lg p-6 my-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-yellow-500 mb-2">Important Policy - Customized Products</h3>
                <p className="text-foreground">
                  Because all Wavely products are <strong>made to order and customized</strong> (with your uploaded photos, personalized text, or unique combinations of models/rims/materials), they are considered <strong>products made according to customer specifications</strong> in accordance with consumer protection laws.
                </p>
                <p className="text-foreground mt-2">
                  Therefore, <strong>the 14-day right of withdrawal does NOT apply</strong> to Wavely products.
                </p>
              </div>
            </div>
          </div>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">1. Right of Withdrawal and Customized Products</h2>
            
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
              <div className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">We DO NOT accept returns for:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Customized cases with photos uploaded by the customer</li>
                    <li>Cases with personalized text added by the customer</li>
                    <li>Any product configured/customized through our configurator</li>
                    <li>Products that do not have manufacturing defects</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">We accept returns/replacements ONLY for:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Products with manufacturing defects</li>
                    <li>Products damaged during shipping</li>
                    <li>Products that do not match your order specifications</li>
                    <li>Errors on our part in order processing</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">2. Legal Basis</h2>
            <p>
              According to <strong>consumer protection laws</strong>, the right of withdrawal does NOT apply to:
            </p>
            <blockquote className="border-l-4 border-primary/50 pl-4 italic my-4 text-foreground">
              "supply of goods made to customer specifications or clearly personalized"
            </blockquote>
            <p>
              All Wavely products fall into this category, being created individually for each customer based on selected options (phone model, material, photos, text).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">3. Product Warranty - What's Covered</h2>
            <p>
              Although we do not offer right of withdrawal for customized products, <strong>all products benefit from a 24-month legal warranty of conformity</strong>.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">3.1. Covered Manufacturing Defects:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Defective bonding of printed layers to case</li>
              <li>Material issues caused by manufacturing process</li>
              <li>Poor quality printing or premature discoloration</li>
              <li>Cracks or damage not caused by normal use</li>
              <li>Issues with buttons or ports that don't function properly</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">3.2. NOT Covered by Warranty:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Normal wear over time (normal use scratches, discoloration after many years)</li>
              <li>Damage caused by drops, impacts, or improper use</li>
              <li>Modifications or repairs performed by third parties</li>
              <li>Exposure to extreme conditions (extreme heat, chemicals, etc.)</li>
              <li>Minor color differences from screen display (natural variations between monitors and printing)</li>
              <li>Misfit caused by providing incorrect information at order (wrong phone model, etc.)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">4. Claim Procedure for Defective Products</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-2">Step 1: Contact Us Quickly</h3>
            <p>
              If your product has a manufacturing defect or was damaged in transit, contact us <strong>within 48 hours</strong> of receiving the package at:
            </p>
            <ul className="list-disc pl-6 space-y-1 my-3">
              <li>Email: <a href="mailto:support@wavely.com" className="text-primary hover:underline">support@wavely.com</a></li>
              <li>Phone: +40 756 123 456</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Step 2: Provide Evidence</h3>
            <p>You must include the following in your email:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Order number</li>
              <li>Clear photos of the defect (minimum 3 different angles)</li>
              <li>Detailed description of the problem</li>
              <li>Photo of original packaging (if damaged)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Step 3: Evaluation and Solution</h3>
            <p>
              We will evaluate your case within <strong>24-48 business hours</strong> and offer one of the following solutions:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Free replacement:</strong> We manufacture an identical new product and ship it at no additional cost</li>
              <li><strong>Full refund:</strong> You return the defective product and receive your money back in full</li>
              <li><strong>Store credit with bonus:</strong> If you prefer credit for a future order, we offer +10% bonus</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Step 4: Return (if applicable)</h3>
            <p>
              If return is approved:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We will send you a prepaid return label via email</li>
              <li>Pack the product in original packaging</li>
              <li>Attach the label to the package and hand it to the courier</li>
              <li>You will receive a tracking number to follow the return</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">5. Products Damaged in Transit</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-2">5.1. Visible Package Damage</h3>
            <p>
              If the package shows visible damage upon delivery (crushed box, opened, etc.):
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>REFUSE</strong> package acceptance if damage is severe</li>
              <li>Contact us immediately with photos of the damaged package</li>
              <li>We will ship a new product at no additional cost</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">5.2. Damage Discovered After Opening</h3>
            <p>
              If you discover damage after opening the package:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Keep ALL packaging materials</li>
              <li>Take clear photos of the product and packaging</li>
              <li>Contact us within <strong>24 hours</strong></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">6. Misfit or Wrong Order</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-2">6.1. Error on Our Part</h3>
            <p>
              If we made a mistake with your order (wrong phone model, wrong rim, wrong text, etc.):
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact us immediately with photographic evidence</li>
              <li>We will ship you the correct product FREE</li>
              <li>You can keep the wrong product or return it (we cover costs)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">6.2. Error on Your Part</h3>
            <p>
              If you selected the wrong phone model or other wrong options:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Unfortunately, we cannot accept the return (customized product)</li>
              <li>You can order a new product with the correct specifications</li>
              <li>We offer <strong>15% discount</strong> for a replacement order in such cases</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">7. Refund Timeframes</h2>
            <p>
              If refund is approved:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Return processing:</strong> 2-3 business days after receiving returned product</li>
              <li><strong>Card refund:</strong> 5-10 business days (depending on issuing bank)</li>
              <li><strong>PayPal refund:</strong> 1-3 business days</li>
              <li><strong>Store credit:</strong> Immediately after approval</li>
            </ul>
            <p className="mt-4">
              Refund includes product value. Initial shipping costs are refunded ONLY if defect is our fault.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">8. Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div className="border-l-2 border-primary/50 pl-4">
                <h4 className="font-semibold text-foreground mb-2">Q: Can I return the case if I don't like how the printed photo looks?</h4>
                <p className="text-sm">
                  A: Unfortunately, no. We provide a live preview in the configurator before ordering. Minor color differences between screen and print are normal and do not constitute a defect. Make sure you're satisfied with the preview before ordering.
                </p>
              </div>

              <div className="border-l-2 border-primary/50 pl-4">
                <h4 className="font-semibold text-foreground mb-2">Q: I ordered the wrong phone model. Can I exchange it?</h4>
                <p className="text-sm">
                  A: If the error is on our part, YES, we exchange it for free. If you selected the wrong model, we cannot accept the return, but we offer 15% discount for a new order.
                </p>
              </div>

              <div className="border-l-2 border-primary/50 pl-4">
                <h4 className="font-semibold text-foreground mb-2">Q: The 3D rim came off. Is it covered by warranty?</h4>
                <p className="text-sm">
                  A: YES, absolutely! If the rim comes off due to a manufacturing issue (not from impact), we replace it free under the 24-month warranty.
                </p>
              </div>

              <div className="border-l-2 border-primary/50 pl-4">
                <h4 className="font-semibold text-foreground mb-2">Q: The case cracked after 3 months of normal use.</h4>
                <p className="text-sm">
                  A: This should not happen with normal use and is covered by warranty. Contact us with photos and we will replace the product.
                </p>
              </div>

              <div className="border-l-2 border-primary/50 pl-4">
                <h4 className="font-semibold text-foreground mb-2">Q: I dropped my phone and the case broke. Can I get a replacement?</h4>
                <p className="text-sm">
                  A: Unfortunately, damage caused by impacts or drops is not covered by warranty. You can order a new case with a 10% loyalty discount.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold font-poppins text-foreground mb-4">9. Contact for Returns</h2>
            <p>
              For any questions related to returns or warranty:
            </p>
            <p className="mt-4">
              <strong>Returns & Warranty Department</strong><br />
              Email: <a href="mailto:support@wavely.com" className="text-primary hover:underline">support@wavely.com</a><br />
              Phone: +40 756 123 456<br />
              Schedule: Monday-Friday, 9:00 AM - 6:00 PM
            </p>
            <p className="mt-4 text-sm">
              <strong>Response time:</strong> 24-48 business hours
            </p>
          </section>

          <div className="border-t border-border/40 pt-6 mt-8">
            <p className="text-sm text-center">
              <strong>Important Note:</strong> Before placing your order, carefully verify all selected options (phone model, material, photos, text) in the configurator. Being customized products, we cannot accept returns for change of mind or selection errors.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReturnPolicy;
