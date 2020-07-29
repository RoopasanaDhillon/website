import React from 'react'
import { Link } from 'gatsby'
import slug from '~utilities/slug'
import { Row, Col } from '~components/common/grid'

import LastUpdated from '~components/common/last-updated'
import preambleStyle from './preamble.module.scss'
import downloadDataStyles from './download-data.module.scss'

const DownloadData = ({ state, hideLabel = false }) => (
  <div className={downloadDataStyles.container}>
    {!hideLabel && (
      <h3 className={downloadDataStyles.header}>Get the data as:</h3>
    )}
    <p>
      <a
        href={`/data/download/${slug(state.name)}-history.csv`}
        className={downloadDataStyles.button}
      >
        CSV
      </a>
      <Link to="/data/api" className={downloadDataStyles.button}>
        API
      </Link>
      <a
        href="https://docs.google.com/spreadsheets/u/2/d/e/2PACX-1vRwAqp96T9sYYq2-i7Tj0pvTf6XVHjDSMIKBdZHXiCGGdNC0ypEU9NbngS8mxea55JuCFuua1MUeOj5/pubhtml"
        className={downloadDataStyles.button}
      >
        Spreadsheet
      </a>
    </p>
  </div>
)

const DownloadDataRow = ({
  state,
  lastUpdateEt,
  unformatted = false,
  national = false,
}) => (
  <Row>
    <Col width={[4, 6, 6]}>
      <div className={downloadDataStyles.lastUpdatedContainer}>
        <LastUpdated
          lastUpdateEt={lastUpdateEt}
          unformatted={unformatted}
          national={national}
        />
      </div>
    </Col>
    <Col width={[4, 6, 6]}>
      <div className={preambleStyle.largeDisclosure}>
        <DownloadData state={state} />
      </div>
    </Col>
  </Row>
)

export default DownloadData

export { DownloadData, DownloadDataRow }
