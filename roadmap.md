# Rubix Cube Hackathon Roadmap

## Phase 1: Setup and Basic Structure (3 hours)
- Project initialization with Node.js and React
- Database setup (PostgreSQL for user data, MongoDB for questionnaire responses)
- Basic project structure and routing setup
- Initial RBAC framework setup

## Phase 2: Authentication System (4 hours)
- Patient authentication flow
  - First-time login with OTP
  - Password creation/reset functionality
  - Regular login system
- CE Reviewer authentication
  - Login system
  - Password reset functionality
- Basic session management

## Phase 3: Questionnaire Implementation (8 hours)
### Core Questionnaire Components
- Demographic section
- Social section with early exit conditions
- Medical section with flags and early exit conditions
- Functional section with scoring
- Behavioral section with scoring
- Cognition section with scoring
- Form validation and data persistence

### Scoring System
- Auto-scoring implementation for:
  - Functional assessments
  - Behavioral assessments
  - Cognition assessments
- Flag system for marked questions

## Phase 4: Summary and Dashboard (6 hours)
- Patient summary view
  - Medical flags
  - Functional scores
  - Behavioral scores
  - Cognition scores
- CE Reviewer dashboard
  - Patient search functionality
  - Follow-up appointments view
  - Assessment scores display
- De-duplication system for Patient IDs

## Phase 5: Appointment Management (4 hours)
- Booking management system
  - Appointment scheduling
  - Follow-up management
- Appointment details view
  - Recent symptoms
  - Medication details
  - Career notes
  - Test results

## Phase 6: Testing and Bug Fixes (3 hours)
- End-to-end testing
- Bug fixes and optimizations
- Performance testing

## Phase 7: Final Polish (2 hours)
- UI/UX improvements
- Final testing
- Deployment preparation

## Essential Functionalities Checklist

### Authentication
- [ ] Patient first-time login with OTP
- [ ] Password creation/reset
- [ ] CE Reviewer login
- [ ] Session management

### Questionnaire
- [ ] All 6 sections implementation
- [ ] Early exit conditions
- [ ] Auto-scoring system
- [ ] Flag system for marked questions

### Summary and Dashboard
- [ ] Patient summary view
- [ ] CE Reviewer dashboard
- [ ] Patient search functionality
- [ ] De-duplication check

### Appointment System
- [ ] Booking management
- [ ] Follow-up scheduling
- [ ] Appointment details view

### Data Management
- [ ] Database integration
- [ ] Data persistence
- [ ] Basic error handling

## Notes
- Focus on core functionalities first
- Implement basic working features before adding enhancements
- Maintain clean code structure for future extensibility
- Ensure proper error handling for critical features
- Prioritize user experience for questionnaire flow
