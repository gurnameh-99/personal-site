// TODO Add a couple lines about each project
const data = [
  {
    title: 'CAD for kidney using DL',
    subtitle: 'Computer Aided Diagnosis for Kidney using Deep Learning',
    image: '/images/projects/kidney.png',
    date: 'April 2022',
    desc:
      'Our aim is to develop a system that can be used to diagnose kidney diseases using deep learning. The system will be able to detect kidney diseases using CT images of the kidney.'
      + 'Augmentation using GANs: Converting contrast images into non-contrast and other CT modalities for increase in data available.'
      + 'Segmentation Using 3D-Unets: Combining 3d CT slices with saliency features to create an enhanced segmentation model.'
      + 'Classification : Very Deep Convolutional Neural networks with other approaches combined will be used to make best use of the dataset.',
  },
  {
    title: 'Breathe',
    subtitle: 'Lung disease classification using respiratory sound data',
    link: 'https://github.com/gurnameh-99/Breathe',
    image: '/images/projects/breathe.png',
    date: 'July 2022',
    desc:
      'Developed a neural network to classify various lung diseases using respiratory audio data. The model is deployed on a android application which uses digital stethescope to acquire the data.',
  },
  {
    title: 'Covid Classifier',
    subtitle: 'Covid Xray Lung classification',
    link: 'https://github.com/gurnameh-99/COVID-XRAY-Classifier',
    image: '/images/projects/classes.png',
    date: 'August 2021',
    desc:
      'Created a model for lung data classification using Deep learning for covid detection on the XRay images using the dataset from Kaggle.',
  },
  {
    title: 'CarbonDex',
    subtitle: 'Official Submission for BoilerMake 2021',
    link: 'https://devpost.com/software/carbondex',
    image: '/images/projects/carbondex.png',
    date: 'February 2021',
    desc:
      'CarbonDex provides a simple yet sophisticated UI with which the users can know more about how their daily activities impact the planet via the means of the carbon footprint that they leave behind. Users can also calculate the carbon footprint they leave behind on journeys using using Google Maps.',
  },
  {
    title: 'SFD 2021 Website',
    subtitle: 'Made a website for Software Freedom Day 2021',
    link: 'https://github.com/gurnameh-99/SFD2021',
    image: '/images/projects/sfd.png',
    date: 'December 2021',
    desc:
      'Software Freedom Day is an event held all across the world to celebrate the usage of Free and Open Source Software. The event aims to sensitize students about the virtues of Open Source Software.',
  },
  {
    title: 'Schwifty',
    subtitle: 'Payment Tracker',
    link: 'https://github.com/gurnameh-99/Schwifty',
    image: '/images/projects/schwifty.png',
    date: 'December 2021',
    desc:
      'Schwifty is a payment tracker that helps merchants to allocate credits to customers based on their trust level and those credits are used by customers to buy products from the merchant. After the buy is over, customer use those credits to pay off the merchants and those details are stored in the database of Schwifty app. The customer can now pay of the debt after sometime and when the payment is done then those transaction details are marked as paid.',
  },
  {
    title: 'Chart Socket Server',
    subtitle: 'Node server for serving the realtime accelerometer data',
    link: 'https://github.com/gurnameh-99/ChartSocketServer',
    image: '/images/projects/image09.png',
    date: 'April 2021',
    desc:
      'Created a node server for the realtime accelerometer data. The server is deployed on a raspberry pi and the data is sent to the client using websockets. The data is then displayed on a chart on the client side.',
  },
];

export default data;
