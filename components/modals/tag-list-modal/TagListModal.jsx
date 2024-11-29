// components/modals/tag-list-modal/TagListModal.jsx

'use client'
import React, { useState } from "react";
import { useTags } from "@/lib/hooks/blog/useTags";
import InternalLinkBox from "@/components/links/internal-link-box/InternalLinkBox";
import MediumHeader from "@/components/typography/headers/medium-header/Mediumheader";
import styles from "./TagListModal.module.scss";

const TAGS_PER_PAGE = 5

export default function TagListModal() {
    const { availableTags, loadingTags } = useTags()
    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(availableTags.length / TAGS_PER_PAGE)

    const indexOfLastTag = currentPage * TAGS_PER_PAGE
    const indexOfFirstTag = indexOfLastTag - TAGS_PER_PAGE
    const currentTags = availableTags.slice(indexOfFirstTag, indexOfLastTag)

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <>
            <MediumHeader className="bg-green">Tags</MediumHeader>
            <p className={`bg-light border-2 bs-3 br-6 ${styles.description}`}>
                Browse all tags.
            </p>

            {loadingTags ? (
                <p className="loading">Loading tags...</p> 
            ) : (
                <>
                    <ul className={styles.tagList}>
                        {currentTags.map((tag) => (
                            <li key={tag.id} className={styles.tagItem}>
                                <InternalLinkBox href={`/blog/tags/${encodeURIComponent(tag.id)}`} className={styles.tagLink}>
                                    {tag.name}
                                </InternalLinkBox>
                            </li>
                        ))}
                    </ul>

                    {totalPages > 1 && (
                        <div className={styles.pagination}>
                            <button
                                onClick={prevPage}
                                disabled={currentPage === 1}
                                className={`prev-button ${styles.button}`}
                            >
                                {/* Insert previous icon here */}
                                {/* Example: <PrevIcon className={styles.icon} /> */}
                                Prev
                            </button>
                            <span className={styles.pageInfo}>
                                Page {currentPage} of {totalPages}
                            </span>
                            <button
                                onClick={nextPage}
                                disabled={currentPage === totalPages}
                                className={`next-button ${styles.button}`}
                            >
                                {/* Insert next icon here */}
                                {/* Example: <NextIcon className={styles.icon} /> */}
                                Next
                            </button>
                        </div>
                    )}
                </>
            )}
        </>
    )
}
