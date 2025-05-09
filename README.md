UPI Fraud Detection using Machine Learning
Overview
This project develops a machine learning-based system to detect fraudulent UPI (Unified Payments Interface) transactions, enhancing security in digital payments. It uses multiple classification models to identify suspicious transactions and includes a web application for user interaction. The system leverages anomaly detection, feature engineering, and models like Logistic Regression, Random Forest, and XGBoost to achieve high accuracy in fraud detection.
Project Structure

upi_fraud_dataset: The dataset (upi_fraud_dataset.xlsx) containing UPI transaction data used for training and testing the models.
Models:
decision_tree_model.pkl: Pickled Decision Tree model for fraud prediction.
logistic_regression_model.pkl: Pickled Logistic Regression model for fraud prediction.
random_forest_model.pkl: Pickled Random Forest model for fraud prediction.
rf_model.pkl: Another Random Forest model variant.
support_vector_machine_model.pkl: Pickled Support Vector Machine (SVM) model for fraud prediction.


Scripts:
4algo.py: Script implementing and comparing four machine learning algorithms for fraud detection.
app.py: Main Flask application script for the web interface.
check.py: Utility script for validation or testing purposes.
database.py: Script for database interactions (likely for storing user or transaction data).
thanks.py: Script for handling post-prediction responses (e.g., displaying results).


Web App Files:
static/: Directory for static files (e.g., CSS, JavaScript).
templates/: Directory for HTML templates used by the Flask app.


Configuration:
.env: Environment file for storing configuration variables.
.gitignore: File specifying which files to ignore in version control.


Cache:
__pycache__/: Directory for Python bytecode cache files.


Database:
users.db-shm, users.db-wal: SQLite database files for storing user data.



Features

Detects fraudulent UPI transactions using multiple machine learning models.
Provides a web interface (built with Flask) for users to interact with the system.
Supports models like Decision Tree, Logistic Regression, Random Forest, SVM, and XGBoost.
Includes data preprocessing, feature engineering, and anomaly detection for improved accuracy.

Setup Instructions

Clone the Repository:git clone <repository-url>
cd <repository-directory>


Install Dependencies:Ensure Python 3.x is installed, then install required packages:pip install -r requirements.txt

(Note: Create a requirements.txt with dependencies like pandas, scikit-learn, flask, xgboost, etc., if not already present.)
Set Up Environment:Configure environment variables in the .env file (e.g., Flask app settings).
Run the Application:Start the Flask app:python app.py

Access the web interface at http://localhost:5000.
Model Usage:The pickled models (*.pkl) can be loaded using Python's pickle module for predictions. Use 4algo.py to retrain or compare models if needed.

Usage

Use the web interface to input transaction details and get fraud predictions.
The system will process the input using the trained models and display whether the transaction is fraudulent.
Run check.py for additional validation or testing of the models.

Technologies Used

Languages: Python
Frameworks: Flask (web app), Scikit-learn (machine learning)
Models: Decision Tree, Logistic Regression, Random Forest, SVM, XGBoost
Tools: Pandas, NumPy, Pickle, SQLite (database)
Frontend: HTML, CSS, JavaScript (via static/ and templates/)

Future Improvements

Add real-time transaction monitoring.
Integrate more advanced anomaly detection techniques.
Enhance the web interface with better visualization of fraud patterns.

Acknowledgments

Thanks to the open-source community for libraries like Scikit-learn and Flask.


