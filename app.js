const assets = {
  ml: "assets/card-machine-learning.jpg",
  genomics: "assets/card-genomics.jpg",
  multiomics: "assets/card-multiomics.jpg",
  population: "assets/card-population.jpg",
  northwestern: "assets/card-northwestern.jpg",
  florida: "assets/card-florida.jpg",
  vtt: "assets/card-vtt.jpg",
  publications: "assets/card-publications.jpg",
  code: "assets/card-code.jpg",
  awards: "assets/card-awards.jpg",
  platform: "assets/card-platform.jpg",
  alaGem: "assets/card-ala-gem.jpg",
  lineageAi: "assets/card-lineage-ai.jpg",
};

const profileCard = {
  kicker: "Feature presentation",
  title: "Mrinal Mishra, Ph.D.",
  line: "Bioinformatics Analyst | Computational Genomics | Machine Learning",
  meta: "Chicago, IL | Available for bioinformatics, genomics, ML, and computational biology roles",
  image: "assets/hero-genomics.jpg",
  summary:
    "Computational biologist with a Ph.D. in Biology and experience building genomic analysis workflows, deep learning models, and multi-omics studies. Current work focuses on pharmacogenomics, gene expression prediction, drug perturbation, and historically excluded populations in precision medicine.",
  bullets: [
    "Current Bioinformatics Analyst in the Perera Lab at Northwestern University Feinberg School of Medicine.",
    "Experienced with whole-genome sequencing, variant calling, annotation, eQTL mapping, differential expression, and population genomics.",
    "Published research across pharmacogenomics, multi-omics, molecular ecology, microbial ecology, and computational biology.",
  ],
  figure: [
    ["Profile", "Ph.D. computational biologist"],
    ["Focus", "Genomics, ML, PGx, multi-omics"],
    ["Output", "Models, pipelines, publications, web tools"],
  ],
  links: [
    ["Download PDF CV", "downloads/Mrinal_Mishra_Netflix_Style_CV.pdf"],
    ["ATS DOCX", "downloads/Mrinal_Mishra_ATS_CV.docx"],
    ["Email", "mailto:mrnlmishra@gmail.com"],
    ["LinkedIn", "https://www.linkedin.com/in/mrinal-mishra-profile/"],
    ["GitHub", "https://github.com/mrimis"],
    ["Website", "https://mrinalmishra.mystrikingly.com/"],
  ],
};

const cards = {
  northwestern: {
    kicker: "Current role",
    title: "Bioinformatics Analyst",
    line: "Northwestern University | 2022 - Present",
    meta: "Perera Lab, Feinberg School of Medicine, Department of Pharmacology",
    image: assets.northwestern,
    summary:
      "Developing machine learning and genomics workflows for pharmacogenomics research, with emphasis on African American cohorts and gene expression regulation.",
    bullets: [
      "Building deep learning models to predict gene expression across the human genome.",
      "Analyzing drug treatment effects in hepatic cells from African American samples.",
      "Contributed to research on drug perturbation, eQTL mapping, and multi-omics equity in precision medicine.",
    ],
    links: [["Northwestern profile context", "https://mrinalmishra.mystrikingly.com/"]],
  },
  floridaPhd: {
    kicker: "Origin story",
    title: "Ph.D. Candidate, Computational Biology",
    line: "University of Florida | 2015 - 2021",
    meta: "Ph.D. in Biology, 2021",
    image: assets.florida,
    summary:
      "Executed whole-genome sequencing analysis, functional annotation, gene enrichment, variant detection, and population genomics research.",
    bullets: [
      "Researched hybridization of four-eyed sleeper fish populations across regions of the East China Sea.",
      "Identified, evaluated, and categorized population variants for dissertation and publication work.",
      "Created R workflows for population genomics and developed a Python package to filter low-quality variants.",
    ],
  },
  teaching: {
    kicker: "Teaching track",
    title: "Graduate Teaching Assistant",
    line: "University of Florida | 2015 - 2021",
    meta: "Genetics, genomics, bioinformatics, and molecular biology",
    image: assets.population,
    summary:
      "Supported undergraduate instruction and mentoring across genetics, genomics, bioinformatics, molecular biology, and practical lab methods.",
    bullets: [
      "Mentored students in individual and group settings on coursework and projects.",
      "Designed and delivered bioinformatics workshops for undergraduate students.",
      "Taught DNA/RNA structure, gene expression, proteomics, PCR, gel electrophoresis, and fermentation.",
    ],
  },
  vtt: {
    kicker: "Research arc",
    title: "Research Trainee",
    line: "VTT Technical Research Centre | 2012 - 2014",
    meta: "Turku, Finland",
    image: assets.vtt,
    summary:
      "Applied statistical modeling and image analysis to cellular heterogeneity in 3D cancer tumor-cell images before and after chemotherapy.",
    bullets: [
      "Built a cell image analysis pipeline covering acquisition, quality control, cleanup, exploratory analysis, and hypothesis-driven analysis.",
      "Wrote R scripts to segment cancer cell images and extract morphological feature sets.",
      "Prepared raw data for statistical analysis and machine learning models.",
    ],
  },
  vit: {
    kicker: "Early credit",
    title: "Summer Research Trainee",
    line: "Vellore Institute of Technology | 2010",
    meta: "Pancreatic cancer pathway analysis",
    image: assets.multiomics,
    summary:
      "Conducted in silico identification and analysis of pancreatic cancer pathway variation, focusing on KRAS, CDKN2A, MADH4, TP53, and ARMET.",
    bullets: [
      "Integrated expression profile data into molecular interaction networks using Cytoscape.",
      "Identified cross-interactions between five candidate genes and neighboring genes.",
      "Presented the work as a computational analysis poster on pancreatic cancer genetic networks.",
    ],
  },
  ml: {
    kicker: "Top skill",
    title: "Machine Learning",
    line: "TensorFlow, Keras, PyTorch, scikit-learn",
    meta: "CNNs, autoencoders, regression, model fitting, feature optimization",
    image: assets.ml,
    summary:
      "Applied deep learning and regression methods to biological prediction problems, including genome-wide gene expression prediction and QSAR-style activity modeling.",
    bullets: [
      "Built CNN and autoencoder-informed workflows for gene expression and genomic prediction.",
      "Used Python ML packages including TensorFlow, Keras, PyTorch, and scikit-learn.",
      "Created regression-based models and model-preparation pipelines for biological data.",
    ],
  },
  genome: {
    kicker: "Top skill",
    title: "Genome Sequencing Analysis",
    line: "Variant detection, eQTL, annotation",
    meta: "GATK, BWA, Bowtie, DESeq2, BayeScan, KAT",
    image: assets.genomics,
    summary:
      "Hands-on experience with large genome sequencing projects, variant calling pipelines, interpretation, annotation, and expression-related analysis.",
    bullets: [
      "Performed variant detection, interpretation, and classification across sequencing projects.",
      "Worked with GWAS and sequencing tools including GATK, BWA, Bowtie, DESeq2, BayeScan, and KAT.",
      "Built custom programming scripts for sequencing analysis and variant filtering.",
    ],
  },
  multiomics: {
    kicker: "Top skill",
    title: "Multi-Omics and PGx",
    line: "Genomics, transcriptomics, pharmacogenomics",
    meta: "Precision medicine with emphasis on historically excluded populations",
    image: assets.multiomics,
    summary:
      "Published work reviewing and applying multi-omics approaches to precision medicine, drug response, and underrepresented cohorts.",
    bullets: [
      "Connected public multi-omics resources, discovery methods, and PGx examples in review work.",
      "Studied drug perturbation to reveal regulatory variation in African American hepatocyte samples.",
      "Worked across genomic, transcriptomic, and pharmacogenomic data contexts.",
    ],
  },
  population: {
    kicker: "Top skill",
    title: "Population Genetics",
    line: "Hybridization, selection, population structure",
    meta: "mothur, FSTAT, Genepop, STRUCTURE, GenAlEx, POPGENE, MEGA",
    image: assets.population,
    summary:
      "Researched how heritable features change over time, with applied experience in population genomics software and evolutionary analysis.",
    bullets: [
      "Analyzed population hybridization and ancient polymorphisms in marine species.",
      "Used tools including FSTAT, Genepop, STRUCTURE, GenAlEx, POPGENE, MrBayes, TNT, and MEGA.",
      "Built analysis workflows in R and Python to support population genomics research.",
    ],
  },
  programming: {
    kicker: "Tool stack",
    title: "Programming and Pipelines",
    line: "R, Python, Biopython",
    meta: "Analysis workflows, plotting, filtering, image segmentation",
    image: assets.code,
    summary:
      "Built scripts and reusable workflows for genomics, image analysis, plotting, file handling, and variant filtering.",
    bullets: [
      "Created R workflows for population genomics and cell image feature extraction.",
      "Developed Python and Biopython scripts for genomic data handling.",
      "Maintains public repositories with R scripts, Python tools, and notebooks.",
    ],
    links: [["GitHub", "https://github.com/mrimis"]],
  },
  education: {
    kicker: "Credentials",
    title: "Education",
    line: "Ph.D., M.S., B.Tech in life-science computation",
    meta: "University of Florida | University of Turku | VIT University",
    image: assets.awards,
    summary:
      "Academic training spanning computational biology, bioinformatics, genomics, and engineering.",
    bullets: [
      "Ph.D. in Biology, University of Florida, Gainesville, FL, 2021.",
      "M.S. in Bioinformatics, University of Turku, Turku, Finland, 2015.",
      "Bachelor of Technology in Bioinformatics, Vellore Institute of Technology, India, 2012.",
    ],
  },
  certifications: {
    kicker: "Credentials",
    title: "Certifications",
    line: "Coursera machine learning and genomic data science",
    meta: "ML, Python, Galaxy, genomic technologies",
    image: assets.ml,
    summary:
      "Continuing education in machine learning, Python for genomics, and genomic data science tools.",
    bullets: [
      "Supervised Machine Learning: Regression and Classification.",
      "Advanced Learning Algorithms.",
      "Python for Genomic Data Science; Genomic Data Science with Galaxy; Introduction to Genomic Technologies.",
    ],
  },
  awards: {
    kicker: "Recognition",
    title: "Awards and Service",
    line: "Fellowships, poster award, conference volunteering",
    meta: "University of Florida, SIB, ISCB, ISMB/ECCB",
    image: assets.awards,
    summary:
      "Recognition and professional service across bioinformatics and computational biology communities.",
    bullets: [
      "Grinter Fellowship, University of Florida, 2015.",
      "Travel Fellowship Award, Swiss Institute of Bioinformatics, 2013.",
      "Best Poster Award, International Society for Computational Biology, 2011.",
      "Conference Volunteer, ISMB/ECCB Berlin 2013 and Vienna 2011.",
    ],
  },
  languages: {
    kicker: "Profile",
    title: "Languages",
    line: "English, Hindi, Finnish, German",
    meta: "Cross-cultural research and collaboration",
    image: assets.publications,
    summary:
      "Language background supporting international education, research, teaching, and collaboration.",
    bullets: [
      "English: full professional proficiency.",
      "Hindi: native proficiency.",
      "Finnish and German: elementary proficiency.",
    ],
  },
  githubImage: {
    kicker: "GitHub original",
    title: "Image Segmentation and Feature Extraction",
    line: "R scripts for cell image segmentation",
    meta: "Public repository",
    image: assets.vtt,
    summary:
      "A public repository containing R scripts for cell image segmentation and extraction of morphological features.",
    bullets: [
      "Matches VTT research experience in tumor-cell image analysis.",
      "Supports feature extraction and morphology-focused computational workflows.",
    ],
    links: [["Repository", "https://github.com/mrimis/Image-segmentation-and-feature-extraction-"]],
  },
  githubVcf: {
    kicker: "GitHub original",
    title: "VCF File Filtering",
    line: "Python variant filtering utility",
    meta: "Public repository",
    image: assets.genomics,
    summary:
      "A Python-focused public project aligned with variant filtering and genome sequencing workflows.",
    bullets: [
      "Connects to dissertation work involving filtering low-quality variants.",
      "Shows practical coding for sequencing-analysis cleanup.",
    ],
    links: [["Repository", "https://github.com/mrimis/VCF-file-filtering"]],
  },
  githubQsar: {
    kicker: "GitHub original",
    title: "QSAR Prediction Model",
    line: "Notebook-based prediction modeling",
    meta: "Public repository",
    image: assets.ml,
    summary:
      "A Jupyter Notebook project for QSAR prediction modeling and drug activity prediction concepts.",
    bullets: [
      "Demonstrates applied regression and predictive modeling in a biological context.",
      "Pairs with machine learning training and pharmacogenomics interests.",
    ],
    links: [["Repository", "https://github.com/mrimis/QSAR_prediction_model"]],
  },
  githubGenomeRead: {
    kicker: "GitHub original",
    title: "Genome Read Matching",
    line: "Naive matching algorithm",
    meta: "Public repository",
    image: assets.code,
    summary:
      "A Python project demonstrating genome-read matching with a naive matching algorithm.",
    bullets: [
      "Highlights algorithmic thinking for genomic sequence matching.",
      "Useful as a compact coding sample for computational biology roles.",
    ],
    links: [["Repository", "https://github.com/mrimis/Genome-Read-matching-with-Naive-matching-algorithm"]],
  },
  githubDxy: {
    kicker: "GitHub original",
    title: "dxy and Tajima D Statistics",
    line: "Sliding-window whole-genome analysis",
    meta: "Public repository",
    image: assets.population,
    summary:
      "A public R repository aligned with population genomics and whole-genome sliding-window statistics.",
    bullets: [
      "Connects to population genetics and evolutionary genomics experience.",
      "Shows applied statistical workflow development in R.",
    ],
    links: [["Repository", "https://github.com/mrimis/dxy-and-Tajima-D-statistics-over-sliding-window-over-whole-genome"]],
  },
  githubPlot: {
    kicker: "GitHub original",
    title: "File Handling and Plotting Functions",
    line: "Reusable R functions",
    meta: "Public repository",
    image: assets.code,
    summary:
      "A public R repository for single-file and multi-file handling, file data analysis, and plotting.",
    bullets: [
      "Shows reusable data-processing habits in R.",
      "Useful for analysis automation and reporting workflows.",
    ],
    links: [["Repository", "https://github.com/mrimis/File-handling-and-Plotting-Functions"]],
  },
  githubBioportalPortfolio: {
    kicker: "Sanitized GitHub portfolio",
    title: "Perera Lab BioPortal Portfolio Snapshot",
    line: "Source-available review copy",
    meta: "Public repository | Django REST | React | Celery | Docker | genomics workflows",
    image: assets.platform,
    summary:
      "A sanitized public snapshot of the lab-group bioinformatics web platform, shared so recruiters can review the application architecture, backend/frontend implementation, and genomics workflow design without exposing private lab data or deployment material.",
    disclaimer:
      "Disclaimer: this repository is a portfolio-review snapshot only. It is not a production deployment, not an official Northwestern University release or endorsement, and it grants no open-source reuse license.",
    bullets: [
      "Shows Django REST Framework, React/Vite, Celery/Redis, PostgreSQL, Docker Compose, Nginx, authentication flows, chunked uploads, audit logging, and background job orchestration.",
      "Represents workflow surfaces for PLINK 1.9/2.0, GCTA, Beagle, FLARE, GWAS/TWAS, variant-calling, RNA-seq, and QC-oriented genomics analyses.",
      "Excludes research datasets, user uploads, SQLite databases, secrets, deployment credentials, private outputs, local validation artifacts, and third-party tool binaries.",
    ],
    figure: [
      ["Visible", "Architecture, source code, tests, workflow definitions"],
      ["Removed", "Data, secrets, uploads, outputs, binaries"],
      ["Purpose", "Recruiter review of engineering work"],
    ],
    links: [["Sanitized Repository", "https://github.com/mrimis/perera-bioportal-portfolio"]],
  },
  bioportal: {
    kicker: "Active build",
    title: "Perera Lab BioPortal",
    line: "Full-stack genomic tool web app",
    meta: "Django REST API | React | Celery/Redis | Docker | genomics workflows",
    image: assets.platform,
    summary:
      "A web platform for authenticated lab users to upload genomics files, queue command-line bioinformatics jobs, monitor progress, and download analysis outputs from a browser-based workflow.",
    bullets: [
      "Built around Django 5.2, Django REST Framework, React, Bootstrap, Celery, Redis, Docker, and production-style deployment patterns.",
      "Supports chunked uploads, file validation, background job execution, session/auth flows, audit logging, and output download bundles.",
      "Tool catalog includes PLINK 1.9/2.0, GCTA, Beagle, FLARE, GWAS/TWAS, variant-calling, RNA-seq, and QC-oriented workflows.",
    ],
    figure: [
      ["Input", "Large genomics files, metadata, parameters"],
      ["Engine", "Validated uploads, queued jobs, tool registry"],
      ["Output", "Reports, plots, logs, downloadable bundles"],
    ],
  },
  alaGem: {
    kicker: "Active research",
    title: "ALA_GEM",
    line: "Ancestry-aware gene expression modeling",
    meta: "Local ancestry-aware modeling | hg38 | nested cross-validation | external validation",
    image: assets.alaGem,
    summary:
      "A focused modeling project for local-ancestry-aware gene expression prediction, designed to evaluate how ancestry-informed features can improve transcriptomic prediction and downstream disease-relevant analyses.",
    bullets: [
      "Developed training and validation workflows around genotype, local ancestry, expression, and covariate data.",
      "Worked with chromosome-level runs, nested cross-validation, elastic-net style modeling, and external validation comparisons.",
      "Framed for precision-medicine use cases where population structure and local ancestry can affect prediction quality.",
    ],
    figure: [
      ["Input", "Genotype, local ancestry, expression, covariates"],
      ["Model", "Nested CV and ancestry-aware predictors"],
      ["Readout", "Prediction performance and gene-level summaries"],
    ],
  },
  lineageAi: {
    kicker: "Confidential build",
    title: "Ancestry-Aware Bioinformatics AI System",
    line: "High-level public summary only",
    meta: "Confidential project; technical components intentionally withheld from public materials",
    image: assets.lineageAi,
    summary:
      "A confidential AI system in development for reasoning over ancestry-aware bioinformatics questions. The public CV version describes the product direction and scientific motivation without exposing architecture, implementation details, or patent-sensitive components.",
    bullets: [
      "Positions AI as a guided analysis layer for variant, region, population, association, enrichment, and quality-control questions.",
      "Emphasizes responsible genomics use: scope control, reproducibility, warning/routing logic, and explainable summaries.",
      "Public materials should remain high-level; deeper discussion belongs in a private interview, collaboration setting, or NDA-protected review.",
    ],
    figure: [
      ["Need", "Complex ancestry-aware genomic questions"],
      ["System", "Guided AI reasoning layer"],
      ["Public limit", "No proprietary architecture or patentable details"],
    ],
  },
  pubZhong: {
    kicker: "Publication",
    title: "Drug Perturbation and Hepatic Gene Expression",
    line: "American Journal of Human Genetics | 2023",
    meta: "Leveraging drug perturbation to reveal genetic regulators of hepatic gene expression in African Americans",
    image: assets.publications,
    summary:
      "Research on drug perturbation, eQTL mapping, and regulatory variation in African American hepatocyte samples.",
    bullets: [
      "Analyzed treatment-specific and joint eQTL mapping across six drugs and baseline conditions.",
      "Identified altered regulatory effects after drug treatment and insights relevant to liver drug response.",
    ],
    links: [["PubMed", "https://pubmed.ncbi.nlm.nih.gov/36608685/"], ["DOI", "https://doi.org/10.1016/j.ajhg.2022.12.005"]],
  },
  pubYang: {
    kicker: "Publication",
    title: "Multi-Omics Studies in Historically Excluded Populations",
    line: "Clinical Pharmacology and Therapeutics | 2023",
    meta: "The road to equity",
    image: assets.multiomics,
    summary:
      "Review article outlining multi-omics approaches, public resources, discovery methods, PGx examples, and population representation in precision medicine.",
    bullets: [
      "Covered genomics, transcriptomics, proteomics, metabolomics, GWAS, TWAS, PRS, pQTL, and PWAS concepts.",
      "Highlighted the need for historically excluded populations in datasets and discovery pipelines.",
    ],
    links: [["PubMed", "https://pubmed.ncbi.nlm.nih.gov/36495075/"], ["DOI", "https://doi.org/10.1002/cpt.2818"]],
  },
  pubLiu: {
    kicker: "Publication",
    title: "Balancing Selection at Olfactory Receptor Enhancers",
    line: "Molecular Ecology | 2021",
    meta: "Ancient polymorphisms in a Chinese marine fish",
    image: assets.population,
    summary:
      "Population genomic work identifying conserved enhancer variation associated with olfactory receptor genes.",
    bullets: [
      "Connected population genetic analysis, conserved enhancers, and Gene Ontology enrichment.",
      "Investigated balancing selection and trans-lineage polymorphisms in marine fish.",
    ],
    links: [["DOI", "https://doi.org/10.1111/mec.16016"]],
  },
  pubLi: {
    kicker: "Publication",
    title: "Symbiotic Bacteria in Bryozoan Populations",
    line: "Microbial Ecology | 2019",
    meta: "Diversity and dynamics of Candidatus Endobugula",
    image: assets.genomics,
    summary:
      "Study of microbial diversity and symbiotic bacteria in Chinese populations of the bryozoan Bugula neritina.",
    bullets: [
      "Applied comparative microbial community analysis.",
      "Contributed to work spanning metagenomics and microbial ecology.",
    ],
    links: [["DOI", "https://doi.org/10.1007/s00248-018-1233-x"]],
  },
  pubDing: {
    kicker: "Publication",
    title: "Hybridization in Bostrychus sinensis",
    line: "Heredity | 2018",
    meta: "Secondary contact region of the East China Sea",
    image: assets.population,
    summary:
      "Characterization of hybridization within a secondary contact region of an inshore fish species.",
    bullets: [
      "Aligned with dissertation research on four-eyed sleeper fish populations.",
      "Used population genetic evidence to study hybridization and geographic structure.",
    ],
    links: [["DOI", "https://doi.org/10.1038/s41437-017-0011-8"]],
  },
  pubMishra2016: {
    kicker: "Publication",
    title: "Microsatellite Markers for Phylogeographic Structure",
    line: "Journal of Phylogenetics and Evolutionary Biology | 2016",
    meta: "Rock shell populations in the Northwest Pacific",
    image: assets.publications,
    summary:
      "Study of microsatellite marker utility for resolving phylogeographic structure in Northwest Pacific rock shell populations.",
    bullets: [
      "Built early experience in marker analysis and population structure.",
      "Connected molecular markers to phylogeographic inference.",
    ],
    links: [["DOI", "https://doi.org/10.4172/2329-9002.1000173"]],
  },
  pubGupta: {
    kicker: "Publication",
    title: "Novel Mutation Predicted to Disrupt SGOL1",
    line: "Egyptian Journal of Medical Human Genetics | 2013",
    meta: "Computational mutation interpretation",
    image: assets.ml,
    summary:
      "Computational genetics paper predicting mutation impact on SGOL1 protein function.",
    bullets: [
      "Early publication in medical human genetics.",
      "Shows long-running interest in variant interpretation and functional prediction.",
    ],
    links: [["DOI", "https://doi.org/10.1016/j.ejmhg.2012.09.001"]],
  },
  pubPancreatic: {
    kicker: "Publication",
    title: "Pancreatic Cancer Genetic Network",
    line: "BMC Bioinformatics | 2011",
    meta: "Computational analysis of genetic network involved in pancreatic cancer",
    image: assets.multiomics,
    summary:
      "Poster and publication credit from computational analysis of pancreatic cancer gene networks.",
    bullets: [
      "Analyzed KRAS, CDKN2A, MADH4, TP53, ARMET, and neighboring genes.",
      "Used network visualization and expression integration to investigate disease-state variation.",
    ],
    links: [["DOI", "https://doi.org/10.1186/1471-2105-12-S11-A11"]],
  },
  contact: {
    kicker: "Contact",
    title: "Recruiter Links",
    line: "Email, LinkedIn, GitHub, website, downloadable CV files",
    meta: "Chicago, IL",
    image: assets.code,
    summary:
      "Fast links for hiring teams and collaborators.",
    bullets: [
      "Email: mrnlmishra@gmail.com",
      "Phone: 352-745-9678",
      "Location: Chicago, IL",
    ],
    links: profileCard.links,
  },
};

const rowsByTab = {
  home: {
    label: "Home",
    title: "Because you viewed computational genomics",
    panel: [
      ["Featured", "Current Northwestern PGx role"],
      ["Builds", "BioPortal, ALA_GEM, AI system"],
      ["Research", "8 selected publications"],
    ],
    rows: [
      ["Featured Experience", ["northwestern", "bioportal", "alaGem", "lineageAi", "floridaPhd", "teaching", "vtt", "vit"]],
      ["Top Picks For Recruiters", ["ml", "genome", "multiomics", "population", "programming"]],
      ["Award-Winning Publications", ["pubZhong", "pubYang", "pubLiu", "pubLi", "pubDing"]],
      ["Project Originals", ["bioportal", "alaGem", "lineageAi", "githubImage", "githubVcf", "githubQsar", "githubGenomeRead", "githubDxy", "githubPlot"]],
      ["Credentials and Extras", ["education", "certifications", "awards", "languages", "contact"]],
    ],
  },
  experience: {
    label: "Experience",
    title: "Experience with research depth and product execution",
    panel: [
      ["2022-Present", "Bioinformatics Analyst at Northwestern"],
      ["2015-2021", "Ph.D. genomics, teaching, publications"],
      ["Product Build", "Browser-based genomics tool platform"],
    ],
    rows: [
      ["Current and Previous Roles", ["northwestern", "floridaPhd", "teaching", "vtt", "vit"]],
      ["Product and Research Builds", ["bioportal", "alaGem", "lineageAi"]],
      ["Education", ["education", "certifications", "awards"]],
    ],
  },
  skills: {
    label: "Skills",
    title: "Technical channels with applied evidence",
    panel: [
      ["Genomics", "Variant calling, eQTL, TWAS, local ancestry"],
      ["Machine Learning", "Deep learning, elastic-net, prediction models"],
      ["Engineering", "Django, React, Docker, queues, reproducibility"],
    ],
    rows: [
      ["Bioinformatics and Genomics", ["genome", "multiomics", "population", "alaGem", "lineageAi"]],
      ["Machine Learning", ["ml", "alaGem", "githubQsar", "githubImage", "githubGenomeRead"]],
      ["Bioinformatics Software Engineering", ["bioportal", "programming", "githubVcf", "githubDxy", "githubPlot"]],
      ["Tooling and Credentials", ["certifications", "languages"]],
    ],
  },
  publications: {
    label: "Publications",
    title: "Selected research credits with visual summaries",
    panel: [
      ["PGx", "Drug perturbation and hepatic eQTL"],
      ["Equity", "Multi-omics in excluded populations"],
      ["Evolution", "Population genomics and microbial ecology"],
    ],
    rows: [
      ["Pharmacogenomics and Multi-Omics", ["pubZhong", "pubYang"]],
      ["Population, Molecular, and Microbial Ecology", ["pubLiu", "pubLi", "pubDing", "pubMishra2016"]],
      ["Early Computational Biology", ["pubGupta", "pubPancreatic"]],
    ],
  },
  projects: {
    label: "Projects",
    title: "Active projects and code portfolio",
    panel: [
      ["BioPortal", "Full-stack genomics tool web app"],
      ["ALA_GEM", "Ancestry-aware expression modeling"],
      ["AI System", "Confidential high-level overview"],
    ],
    rows: [
      ["Active Builds", ["bioportal", "alaGem", "lineageAi"]],
      ["Public Repositories", ["githubBioportalPortfolio", "githubImage", "githubVcf", "githubQsar", "githubGenomeRead", "githubDxy", "githubPlot"]],
      ["Project-Relevant Skills", ["programming", "ml", "genome", "population"]],
    ],
  },
  contact: {
    label: "Contact",
    title: "Ready for job postings",
    panel: [
      ["Email", "mrnlmishra@gmail.com"],
      ["Location", "Chicago, IL"],
      ["Portfolio", "GitHub and website links included"],
    ],
    rows: [
      ["Recruiter Actions", ["contact", "education", "northwestern"]],
      ["Shareable Files", ["certifications", "awards", "languages"]],
    ],
  },
};

const els = {
  topbar: document.querySelector("[data-topbar]"),
  rows: document.querySelector("[data-rows]"),
  empty: document.querySelector("[data-empty]"),
  pageTitle: document.querySelector("[data-page-title]"),
  tabLabel: document.querySelector("[data-tab-label]"),
  tabPanel: document.querySelector("[data-tab-panel]"),
  tabs: [...document.querySelectorAll("[data-tab]")],
  modal: document.querySelector("[data-modal]"),
  modalPanel: document.querySelector("[data-modal-panel]"),
  modalArt: document.querySelector("[data-modal-art]"),
  modalKicker: document.querySelector("[data-modal-kicker]"),
  modalTitle: document.querySelector("[data-modal-title]"),
  modalMeta: document.querySelector("[data-modal-meta]"),
  modalSummary: document.querySelector("[data-modal-summary]"),
  modalDisclaimer: document.querySelector("[data-modal-disclaimer]"),
  modalFigure: document.querySelector("[data-modal-figure]"),
  modalList: document.querySelector("[data-modal-list]"),
  modalLinks: document.querySelector("[data-modal-links]"),
  rowTemplate: document.querySelector("#row-template"),
  cardTemplate: document.querySelector("#card-template"),
};

let activeTab = rowsByTab[window.location.hash.slice(1)] ? window.location.hash.slice(1) : "home";

function cardText(card) {
  return [card.kicker, card.title, card.line, card.meta, card.summary, ...(card.bullets || [])]
    .join(" ")
    .toLowerCase();
}

function visibleCards(ids, query) {
  if (!query) return ids;
  return ids.filter((id) => cardText(cards[id]).includes(query));
}

function render() {
  const config = rowsByTab[activeTab] || rowsByTab.home;
  const query = "";
  document.body.dataset.view = activeTab;
  els.rows.textContent = "";
  els.tabPanel.textContent = "";
  els.pageTitle.textContent = config.title;
  els.tabLabel.textContent = config.label;
  (config.panel || []).forEach(([metric, caption]) => {
    const stat = document.createElement("div");
    stat.className = "tab-stat";
    const strong = document.createElement("strong");
    strong.textContent = metric;
    const span = document.createElement("span");
    span.textContent = caption;
    stat.append(strong, span);
    els.tabPanel.appendChild(stat);
  });

  let rendered = 0;
  config.rows.forEach(([title, ids]) => {
    const matching = visibleCards(ids, query);
    if (!matching.length) return;

    const row = els.rowTemplate.content.firstElementChild.cloneNode(true);
    row.querySelector("h3").textContent = title;
    const strip = row.querySelector("[data-cards]");

    matching.forEach((id) => {
      strip.appendChild(createCard(id, cards[id]));
      rendered += 1;
    });

    row.querySelector("[data-scroll-left]").addEventListener("click", () => {
      strip.scrollBy({ left: -strip.clientWidth * 0.82, behavior: "smooth" });
    });
    row.querySelector("[data-scroll-right]").addEventListener("click", () => {
      strip.scrollBy({ left: strip.clientWidth * 0.82, behavior: "smooth" });
    });

    els.rows.appendChild(row);
  });

  els.empty.hidden = rendered !== 0;
}

function createCard(id, card) {
  const node = els.cardTemplate.content.firstElementChild.cloneNode(true);
  const image = node.querySelector("img");
  image.src = card.image;
  image.alt = `${card.title} visual`;
  node.querySelector(".card-kicker").textContent = card.kicker;
  node.querySelector("h4").textContent = card.title;
  node.querySelector(".card-line").textContent = card.line;
  node.dataset.cardId = id;
  node.addEventListener("click", () => openModal(card));
  node.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(card);
    }
  });
  return node;
}

function openModal(card) {
  els.modalArt.style.backgroundImage = `url("${card.image}")`;
  els.modalKicker.textContent = card.kicker;
  els.modalTitle.textContent = card.title;
  els.modalMeta.textContent = card.meta || card.line;
  els.modalSummary.textContent = card.summary;
  els.modalDisclaimer.textContent = card.disclaimer || "";
  els.modalDisclaimer.hidden = !card.disclaimer;
  const figure = card.figure || [
    ["Focus", card.kicker],
    ["Signal", card.line],
    ["Evidence", `${(card.bullets || []).length || 1} supporting points`],
  ];
  els.modalFigure.textContent = "";
  figure.forEach(([label, value]) => {
    const step = document.createElement("div");
    step.className = "figure-step";
    const labelNode = document.createElement("b");
    labelNode.textContent = label;
    const valueNode = document.createElement("span");
    valueNode.textContent = value;
    step.append(labelNode, valueNode);
    els.modalFigure.appendChild(step);
  });
  els.modalList.textContent = "";
  (card.bullets || []).forEach((bullet) => {
    const li = document.createElement("li");
    li.textContent = bullet;
    els.modalList.appendChild(li);
  });
  els.modalLinks.textContent = "";
  (card.links || []).forEach(([label, href]) => {
    const a = document.createElement("a");
    a.href = href;
    a.textContent = label;
    if (/^https?:\/\//.test(href)) {
      a.target = "_blank";
      a.rel = "noreferrer";
    }
    els.modalLinks.appendChild(a);
  });

  document.body.classList.add("modal-open");
  els.modal.hidden = false;
}

function closeModal() {
  document.body.classList.remove("modal-open");
  els.modal.hidden = true;
}

document.querySelector("[data-open-profile]").addEventListener("click", () => openModal(profileCard));
document.querySelector("[data-close-modal]").addEventListener("click", closeModal);

els.modal.addEventListener("click", (event) => {
  if (!els.modalPanel.contains(event.target)) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !els.modal.hidden) closeModal();
});

els.tabs.forEach((button) => {
  button.addEventListener("click", () => {
    activeTab = button.dataset.tab;
    els.tabs.forEach((tab) => tab.classList.toggle("is-active", tab === button));
    window.history.replaceState(null, "", `#${activeTab}`);
    render();
    window.setTimeout(() => {
      document.querySelector(".rail-shell").scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  });
});

window.addEventListener("hashchange", () => {
  const nextTab = rowsByTab[window.location.hash.slice(1)] ? window.location.hash.slice(1) : "home";
  activeTab = nextTab;
  els.tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.tab === activeTab));
  render();
});

window.addEventListener("scroll", () => {
  els.topbar.classList.toggle("is-solid", window.scrollY > 16);
});

els.tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.tab === activeTab));
render();
if (activeTab !== "home") {
  window.setTimeout(() => {
    document.querySelector(".rail-shell").scrollIntoView({ behavior: "auto", block: "start" });
  }, 80);
}

const openCardId = new URLSearchParams(window.location.search).get("open");
if (cards[openCardId]) {
  window.setTimeout(() => {
    openModal(cards[openCardId]);
    if (new URLSearchParams(window.location.search).get("scroll") === "bottom") {
      window.setTimeout(() => {
        document.querySelector(".modal-body").scrollTop = document.querySelector(".modal-body").scrollHeight;
      }, 120);
    }
  }, 180);
}
