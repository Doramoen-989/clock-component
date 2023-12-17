import React from 'react'

function FlowZoneUpdate() {
    return (
        <div className='flowPeaks' style={{ padding: "25px" }}>
            <div className='myFlowPeaks' >
                <span className='flowPeaksText'>My Flow Peaks</span><br />
                <span className='flowPeaksText'>02pm - 08pm</span>
            </div>
            <div className='globalFlowPeaks'>
                <span className='flowPeaksText'>Global Flow Peaks</span><br />
                <span className='flowPeaksText'>04pm - 11pm</span>
            </div>
        </div>
    )
}
export default FlowZoneUpdate