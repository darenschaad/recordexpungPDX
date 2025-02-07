import { LOAD_SEARCH_RECORDS, LOAD_SEARCH_RECORDS_LOADING } from './types';

const fakeRecord = {
  total_balance_due: 199.99,
  cases: [
    {
      name: 'Doe, John',
      birth_year: 1970,
      case_number: 'HA05555555',
      citation_number: 'HA08643443',
      location: 'Multnomah',
      date: '09/05/2008',
      violation_type: 'Municipal Parking',
      current_status: 'Closed',
      charges: [
        {
          name: 'Loading Zone',
          statute: '29',
          level: 'Violation Unclassified',
          date: '09/04/2008',
          disposition: {
            date: '11/18/2008',
            ruling: 'Convicted'
          },
          expungement_result: {
            type_eligibility: false,
            type_eligibility_reason: 'Ineligible under 137.225(5)',
            time_eligibility: null,
            time_eligibility_reason: '',
            date_of_eligibility: null
          }
        }
      ],
      balance_due: 199.99,
      case_detail_link:
        'https://publicaccess.courts.oregon.gov/PublicAccessLogin/CaseDetail.aspx?CaseID=11918348'
    },
    {
      name: 'Doe, John',
      birth_year: 1970,
      case_number: '18VI55555',
      citation_number: 'RU420001442',
      location: 'Multnomah',
      date: '04/02/2018',
      violation_type: 'Offense Violation',
      current_status: 'Closed',
      charges: [
        {
          name: 'Violating a Speed Limit',
          statute: '811111',
          level: 'Violation Class A',
          date: '03/06/2018',
          disposition: {
            date: '04/02/2018',
            ruling: 'Dismissed'
          },
          expungement_result: {
            type_eligibility: true,
            type_eligibility_reason: 'Eligible under 137.225(1)(b)',
            time_eligibility: null,
            time_eligibility_reason: '',
            date_of_eligibility: null
          }
        },
        {
          name: 'Violation Driving While Suspended or Revoked',
          statute: '811175',
          level: 'Violation Class A',
          date: '03/06/2018',
          disposition: {
            date: '04/02/2018',
            ruling: 'Dismissed'
          },
          expungement_result: {
            type_eligibility: true,
            type_eligibility_reason: 'Eligible under 137.225(1)(b)',
            time_eligibility: null,
            time_eligibility_reason: '',
            date_of_eligibility: null
          }
        }
      ],
      balance_due: 0.0,
      case_detail_link:
        'https://publicaccess.courts.oregon.gov/PublicAccessLogin/CaseDetail.aspx?CaseID=55555555'
    }
  ]
};

export const loadSearchRecordsMock = () => (dispatch: Function) => {
  dispatch({
    type: LOAD_SEARCH_RECORDS_LOADING
  });
  const actionCreator = () =>
    Promise.resolve(fakeRecord).then(payload => {
      dispatch({
        type: LOAD_SEARCH_RECORDS,
        search_records: payload
      });
    });

  setTimeout(actionCreator, 1500);
};
