import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { getExperience } from '../../reducers/experience';
import { getEducation } from '../../reducers/education';
import { getCertificates } from '../../reducers/certificates';
import {
  fetchExperience,
  fetchEducation,
  fetchCertificates,
} from '../../actions';
import Experience from './Experience';
import Education from './Education';
import Certificates from './Certificates';

class AboutContainer extends Component {
  componentDidMount() {
    this.props.fetchExperience();
    this.props.fetchEducation();
    this.props.fetchCertificates();
  }

  render() {
    const { experience, education, certificates } = this.props;
    return (
      <>
        <Row className="align-self-center">
          <Col xs={12}>
            <Experience experience={experience} />
          </Col>
          <Col xs={12} className="mt-4">
            <Education education={education} />
          </Col>
          <Col xs={12} className="mt-4">
            <Certificates certificates={certificates} />
          </Col>
        </Row>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  experience: getExperience(state),
  education: getEducation(state),
  certificates: getCertificates(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchExperience: (value) => dispatch(fetchExperience(value)),
  fetchEducation: (value) => dispatch(fetchEducation(value)),
  fetchCertificates: (value) => dispatch(fetchCertificates(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);
