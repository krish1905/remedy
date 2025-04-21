# remEDy - AI-Powered Emergency Department Automation

remEDy is a comprehensive digital solution designed to streamline patient intake, reduce wait times, and improve care coordination across emergency departments. This project was developed specifically for the Waterloo Region Health Network (WRHN) Innovation Challenge.

## 🌟 System Overview

remEDy is a scalable digital solution that integrates AI and automation across three key stages of a patient's emergency department (ED) journey:

### 🔷 1. Pre-Arrival Automation
**Goal**: Collect patient data before arrival, triage remotely, and route non-emergent cases to community care.

**Key Components**:
- **Virtual AI Triage App**: Web/mobile app for symptom description and risk assessment
- **Pre-Registration Form**: Digital collection of demographics, symptoms, and health information
- **Advance Notification**: Automated creation of pre-arrival files and staff alerts

### 🔷 2. In-ED Intake & Consent
**Goal**: Digitize and automate intake, consent, and triage to reduce initial delays.

**Key Components**:
- **Smart Check-In Kiosks**: Digital check-in with multilingual support
- **E-Signature & Compliance**: PHIPA and PIPEDA compliant digital consent
- **AI Triage Decision Support**: Augmented decision-making for triage nurses
- **Real-Time Record Access**: Instant access to patient history and records

### 🔷 3. Discharge & Follow-Up Automation
**Goal**: Minimize discharge delays through automated paperwork and follow-up.

**Key Components**:
- **AI-Generated Discharge Summaries**: Automated documentation with doctor review
- **Patient-Friendly Instructions**: Clear, translated discharge information
- **Automated Referrals**: Instant referral system to community providers
- **eNotifications**: Secure notifications to family doctors

## 🛡️ Security & Compliance

- End-to-end encryption for all PHI
- Full compliance with Canadian healthcare regulations
- Transparent consent management
- Comprehensive audit trails
- Secure integration with hospital EHR systems

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/remEDy.git
cd remEDy
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🏗️ Project Structure

```
remEDy/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── benefits/          # Benefits page
│   ├── features/          # Features page
│   ├── hospital-dashboard/# Hospital dashboard
│   ├── login/             # Login page
│   ├── patient-dashboard/ # Patient dashboard
│   └── signup/            # Signup page
├── components/            # Reusable UI components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and configurations
├── public/                # Static assets
└── styles/                # Global styles
```

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - JavaScript library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Zod](https://zod.dev/) - Schema validation
- [React Hook Form](https://react-hook-form.com/) - Form handling

## 📱 User Interfaces

### Patient Dashboard
- View medical history
- Track current status
- Access discharge information
- Submit pre-arrival information
- View follow-up appointments

### Hospital Dashboard
- Monitor patient flow
- Manage staff assignments
- Track resource utilization
- Review AI triage recommendations
- Access patient records

## 🔒 Authentication

The application includes secure login and signup functionality for both patients and hospital staff, with multi-factor authentication options.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

For any inquiries or support regarding the WRHN Innovation Challenge implementation, please reach out to the development team.

---

Made with ❤️ for better healthcare in the Waterloo Region 