# Generated by Django 2.2.4 on 2019-09-18 14:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('clients', '0002_users'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Users',
        ),
    ]