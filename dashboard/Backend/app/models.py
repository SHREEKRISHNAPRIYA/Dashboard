from . import db

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(200), nullable=True)
    status = db.Column(db.String(20), default="Pending")

class KPI(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    value = db.Column(db.Float, nullable=False)
    target = db.Column(db.Float, nullable=False)

class FinancialOverview(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    value = db.Column(db.String(50), nullable=False)

class CRMInsight(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    metric = db.Column(db.String(100), nullable=False)
    value = db.Column(db.Integer, nullable=False)
