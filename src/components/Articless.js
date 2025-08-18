import { useState } from "react";
import articles from "../data/articles";
import Badge from "./badge";
import Pagination from "./pagination";
import "../index.css"; 

export default function Articles() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;

  const indexOfLast = currentPage * articlesPerPage;
  const indexOfFirst = indexOfLast - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirst, indexOfLast);
 
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <div className="articles-page">
      <div className="articles-header">
        <h1>My Articles</h1>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Last Edited</th>
            </tr>
          </thead>
          <tbody>
            {currentArticles.map((article) => (
              <tr key={article.id}>
                <td>{article.title}</td>
                <td className="status-cell">
                  <Badge status={article.status} />
                </td>
                <td className="edited-cell">{article.lastEdited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
