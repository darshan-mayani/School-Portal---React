import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/StudentDashboard';
import Analysis from './pages/Analysis';
import Reports from './pages/Reports';
import AttendancePage from './pages/AttendancePage';
import EventsPage from './pages/EventsPage';
import ExamPage from './pages/ExamPage';
import ResultPage from './pages/ResultPage';
import BusPassPage from './pages/BusPassPage';
import FeesDetailsPage from './pages/FeesDetailsPage';
import EContentPage from './pages/EContentPage';
import TeacherDashboard from './pages/TeacherDashboard';
import AssignmentUploadPage from './pages/Assignmentupload';
import TAssignment from './pages/TAssignment';
import SendMessage from './pages/Sendmessage';
import UploadEContent from './pages/Uploadecontent';


const App = () => {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/exam" element={<ExamPage />} />
          <Route path="/bus-pass" element={<BusPassPage />} />
          <Route path="/fees" element={<FeesDetailsPage />} />
          <Route path="/econtent" element={<EContentPage />} />
          <Route path="/results" element={<ResultPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/assignment" element={<AssignmentUploadPage />} />
          <Route path="/tassignment" element={<TAssignment />} />
          <Route path="/sendmessage" element={<SendMessage />} />
          <Route path="/tecontent" element={<UploadEContent />} />
        </Routes>
      </div>
  );
};

export default App;

