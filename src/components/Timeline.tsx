import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep  2021 - Jan 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Transcription QA</h3>
            <h4 className="vertical-timeline-element-subtitle">RND Softech Pvt. Ltd. - Coimbatore, TN</h4>
            <p>
              Ensured accuracy and quality. Maintained productivity and client-spec compliance. Coordinated with team members to improve workflow efficiency.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2018 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Computer Applications (BCA)</h3>
            <h4 className="vertical-timeline-element-subtitle">KG College of Arts and Science, Coimbatore</h4>
            <p>
              Major: Software Development | Minor: Web Technologies. Current Aggregate: 70% (Consistently above 80% in 10th, 12th, and undergraduate studies)
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;