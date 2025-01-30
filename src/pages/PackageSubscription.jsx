import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { subscribePackage } from '../store/actions/packageActions';
import { FooterPrime } from '../components/presentation/FooterPrime';
import { AllAbouJumiaFooter } from '../components/presentation/AllAbouJumiaFooter';
import { HeroBanner } from '../components/homepage/HeroBanner';
import Navbar from '../components/homepage/Navbar';
import { useNavigate } from 'react-router-dom';

const packageData = {
  Self: {
    name: "Self",
    price: 500,
    features: {
      Products: 10,
      Support: "Basic Email Support",
      Analytics: "Basic Analytics",
      Payments: "Standard Gateways",
      Marketing_Tools: 'No',
      Global_Reach: 'No',
      Referral_Program: 'No',
      Transactions: "Up to $500/month",
    },
  },
  Medium: {
    name: "Medium",
    price: 1000,
    features: {
      Products: 50,
      Support: "Priority Email Support",
      Analytics: "Advanced Analytics",
      Payments: "Standard + Premium Gateways",
      Marketing_Tools: 'Yes',
      Global_Reach: 'Yes',
      Referral_Program: 'No',
      Transactions: "Up to $2000/month",
    },
  },
  Enterprise: {
    name: "Enterprise",
    price: 5000,
    features: {
      Products: 100,
      Support: "24/7 Support",
      Analytics: "Full Analytics Suite",
      Payments: "All Gateways + Custom Integrations",
      Marketing_Tools: 'Yes',
      Global_Reach: 'Yes',
      Referral_Program: 'Yes',
      Transactions: "Up to $50,000/month",
    },
  },
  Large: {
    name: "Large",
    price: 15000,
    features: {
      Products: 500,
      Support: "Dedicated Account Manager",
      Analytics: "Custom Analytics and Reporting",
      Payments: "All Gateways + Custom Integrations",
      Marketing_Tools: 'Yes',
      Global_Reach: 'yes',
      Referral_Program: 'Yes',
      Transactions: "Unlimited",
    },
  },
};

const PackageSubscription = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.package);

  const navigate = useNavigate()

  useEffect(() => {
    if (success) {
      navigate('/');
    }
  }, [success, navigate]);

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPackage(null);
    setPaymentMethod('');
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedPackage || !paymentMethod) {
      alert('Please select a package and payment method');
      return;
    }
    dispatch(subscribePackage(selectedPackage.name, paymentMethod));
    closeModal();
  };

  return (
    <>
      <HeroBanner />
      <Navbar />
      <div className="my-10 p-6 bg-white shadow-xl rounded-xl">
        <h2 className="text-3xl font-extrabold text-center text-[#4222C4] mb-8">
          Available Packages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Object.values(packageData).map((pkg) => (
            <div
              key={pkg.name}
              className="p-3 bg-gradient-to-b from-[#f5f8ff] to-[#ffffff] shadow-lg border rounded-lg transform hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold text-[#4222C4] mb-4">
                {pkg.name}
              </h3>
              <p className="text-lg text-gray-700 font-medium mb-3">
                Price: <span className="font-bold text-[#4222C4]">${pkg.price}</span>
              </p>
              <ul className="space-y-2">
                {Object.entries(pkg.features).map(([feature, value]) => (
                  <li
                    key={feature}
                    className="flex items-center text-gray-800 text-sm"
                  >
                    <span className="font-semibold text-[#4222C4] mr-2">
                      {feature}:
                    </span>
                    <span>{value.toString()}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openModal(pkg)}
                className="mt-6 w-full bg-[#4222C4] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#3618a0] transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h2 className="text-2xl font-bold mb-6">
                Subscribe to {selectedPackage.name}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    Payment Method
                  </label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4222C4] transition duration-300"
                  >
                    <option value="">Choose Payment Method</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="PayPal">PayPal</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                  </select>
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`px-4 py-2 bg-[#4222C4] text-white rounded-lg ${
                      loading
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-[#3618a0] transition-colors duration-300'
                    }`}
                  >
                    {loading ? 'Subscribing...' : 'Confirm Subscription'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      <FooterPrime />
      <AllAbouJumiaFooter />
    </>
  );
};

export default PackageSubscription;

