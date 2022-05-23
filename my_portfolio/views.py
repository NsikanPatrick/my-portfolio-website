from django.shortcuts import render
from django.http import FileResponse
import os
from django.http import HttpResponse


def index(request):
    # return HttpResponse('Halo')
    return render(request, 'index.html')


def resume(request):
    filepath = os.path.join('static', 'Resume.pdf')
    return FileResponse(open(filepath, 'rb'), content_type='application/pdf')
