# Generated by Django 4.2.6 on 2023-11-08 08:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contents', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='vod',
            name='bigcategory',
            field=models.CharField(default='기타', max_length=50),
        ),
        migrations.AddField(
            model_name='vod',
            name='smallcategory',
            field=models.CharField(default='기타', max_length=50),
        ),
        migrations.AlterField(
            model_name='vod',
            name='actors',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='vod',
            name='category',
            field=models.CharField(max_length=50, null=True),
        ),
    ]