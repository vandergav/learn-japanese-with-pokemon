import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
    return (
        <div className="row">
            <div className="pagination-button">
                {gotoPrevPage && <button type="button" className="btn btn-primary btn-lg" onClick={gotoPrevPage}>Previous</button>}
            </div>
            <div className="pagination-button">
                {gotoNextPage && <button type="button" className="btn btn-warning btn-lg" onClick={gotoNextPage}>Next</button>}
            </div>
        </div>
    )
}
