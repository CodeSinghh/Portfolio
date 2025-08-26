export type Article = {
  id: number;
  headline: string;
  byline: string;
  body: string;
  image: string;
  dataAiHint: string;
};

export const mainArticles = [
  {
    id: 1,
    headline: "The Role of GPUs in Modern Computing",
    byline: "By Dhiraj Singh (Dev+MLOps) | Published August 26, 2025",
    image: "/Interconnects_Connectors_AI_Accelerators_Data_Center_Figure1.webp",
    dataAiHint: "A technical illustration showing modern GPU architecture and interconnects in data centers",
    sections: [
      {
        type: "introduction",
        content: "In the last two decades, Graphics Processing Units (GPUs) have transformed from specialized chips designed to render images into one of the most critical components of modern computing. Originally built to accelerate graphics rendering for video games and 3D applications, GPUs have evolved into powerful parallel processors that now drive advancements in artificial intelligence, scientific research, cloud computing, and more."
      },
      {
        type: "heading",
        content: "What is a GPU?"
      },
      {
        type: "paragraph",
        content: "A GPU, or Graphics Processing Unit, is a type of processor optimized for handling complex mathematical calculations, particularly those involving large-scale parallelism. Unlike a CPU (Central Processing Unit), which is designed to handle a wide range of general-purpose tasks, a GPU excels at performing many simple operations simultaneously. This makes GPUs ideal for workloads like rendering pixels, processing large datasets, or training deep learning models."
      },
      {
        type: "heading",
        content: "GPU vs CPU: Key Differences"
      },
      {
        type: "bullets",
        items: [
          "Parallelism: CPUs have fewer cores optimized for sequential tasks, while GPUs have thousands of smaller cores built for parallel processing.",
          "Task Specialization: CPUs are versatile and manage operating systems, logic, and sequential programs. GPUs, however, specialize in repetitive calculations and vector operations.",
          "Performance: For highly parallel workloads like video rendering or neural networks, GPUs often outperform CPUs by significant margins."
        ]
      },
      {
        type: "heading",
        content: "Applications of GPUs"
      },
      {
        type: "bullets",
        items: [
          "Graphics and Gaming – The original purpose of GPUs, providing immersive 3D environments and realistic visual effects.",
          "Artificial Intelligence and Machine Learning – Training neural networks requires massive matrix operations, which GPUs handle efficiently. Frameworks like TensorFlow and PyTorch rely heavily on GPU acceleration.",
          "High-Performance Computing (HPC) – Fields like climate modeling, molecular dynamics, and astrophysics use GPU clusters for faster simulations.",
          "Data Science and Analytics – GPUs accelerate big data processing, enabling real-time analysis and predictions.",
          "Creative Industries – Video editing, rendering, and 3D animation rely on GPU acceleration for smooth workflows.",
          "Cloud Computing – GPU-based instances offered by providers like AWS, Google Cloud, and Azure enable businesses to scale AI and compute-heavy applications."
        ]
      },
      {
        type: "heading",
        content: "The Future of GPUs"
      },
      {
        type: "paragraph",
        content: "With the rise of AI, edge computing, and immersive technologies like AR/VR, GPUs are set to become even more central in the computing landscape. Innovations like NVIDIA's CUDA, AMD's ROCm, and Intel's GPU initiatives are making GPUs accessible for broader workloads beyond graphics. Additionally, the demand for energy-efficient GPU designs is pushing companies to innovate in both architecture and software optimization."
      },
      {
        type: "heading",
        content: "Conclusion"
      },
      {
        type: "paragraph",
        content: "From rendering lifelike video games to powering breakthroughs in deep learning, GPUs have evolved into a cornerstone of modern computing. Their ability to handle parallel workloads makes them indispensable across industries, and as technology progresses, the role of GPUs will only expand. In many ways, GPUs are not just the engines of graphics—they are the engines of innovation."
      }
    ]
  },
  {
    id: 2,
    headline: "Aeronautic Marvels: The Clockwork Drones of London Skies",
    byline: "By Phileas Fogg, Esq.",
    body: "The skies above London are now abuzz with the gentle whirring of clockwork automatons, delivering parcels and missives with unprecedented punctuality. These brass-and-copper drones, powered by intricately wound springs and guided by rudimentary analytical engines, represent a triumph of mechanical ingenuity. Concerns over errant gears and sudden descents are, for the moment, dismissed by their creator as 'minor turbulence'.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "steampunk drone",
  },
  {
    id: 3,
    headline: "The Curious Case of the Disappearing Data Packets",
    byline: "By Ada Lovelace",
    body: "A most peculiar phenomenon has beset the global telegraph network. Entire packets of data, dispatched with care, are vanishing without a trace, only to reappear days later in unforeseen locations. Experts from the Royal Society suspect a novel form of digital poltergeist, while others point to solar flares interfering with the burgeoning aether-net. A digital seance has been proposed to communicate with the lost information.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "vintage computer",
  },
];

export const breakingNews: { id: number; headline: string }[] = [
    { id: 1, headline: "Steam-Powered Horseless Carriage Breaks Speed Record of 15 MPH" },
    { id: 2, headline: "Queen Victoria to Send First-Ever 'Electronic Mail' via Telegraph" },
    { id: 3, headline: "Difference Engine Completes Calculation of Pi to 10th Digit" },
    { id: 4, headline: "Rumours of a 'World-Wide Cobweb' of interconnected thinking machines" },
];
