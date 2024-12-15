from flask import Blueprint, request, jsonify
from .models import Task, KPI, FinancialOverview, CRMInsight
from . import db

api = Blueprint('api', __name__)

# KPI routes
@api.route('/kpis', methods=['GET'])
def get_kpis():
    kpis = KPI.query.all()
    kpis_data = [{"id": kpi.id, "title": kpi.title, "value": kpi.value, "target": kpi.target} for kpi in kpis]
    return jsonify(kpis_data)

# Financial Overview routes
@api.route('/financials', methods=['GET'])
def get_financials():
    financials = FinancialOverview.query.all()
    financials_data = [{"id": fin.id, "name": fin.name, "value": fin.value} for fin in financials]
    return jsonify(financials_data)

# CRM Insights routes
@api.route('/crm', methods=['GET'])
def get_crm():
    insights = CRMInsight.query.all()
    crm_data = [{"id": crm.id, "metric": crm.metric, "value": crm.value} for crm in insights]
    return jsonify(crm_data)
# Task routes
def get_tasks():
    tasks = Task.query.all()
    tasks_data = [{"id": task.id, "name": task.name, "status": task.status} for task in tasks]
    return jsonify(tasks_data)